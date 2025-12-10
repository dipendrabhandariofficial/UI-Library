import { useState, useEffect, useCallback, useMemo } from "react";

// --- Types ---
export type ValidationMessage = {
  isRequired?: string;
  minLength?: string;
  maxLength?: string;
  min?: string;
  max?: string;
  pattern?: string;
  matches?: string;
};

export type FieldRules<T = any> = {
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: string | RegExp; // 'email' | 'url' | 'phone' or regex
  custom?: (value: any, values: T) => string | undefined;
  matches?: string;
  msg?: ValidationMessage;
};

export type FormRules<T> = Partial<Record<keyof T, FieldRules<T>>>;

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export type UseFormOptions = {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  resetOnSubmit?: boolean;
};

// --- Helper ---
const formatFieldName = (field: string) => {
  return field
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

// --- Validate form ---
export const validateForm = <T extends Record<string, any>>(
  values: T,
  rules: FormRules<T> = {}
): FormErrors<T> => {
  const errors: FormErrors<T> = {};

  (Object.keys(rules) as Array<keyof T>).forEach((field) => {
    const value = values[field];
    const fieldRules = rules[field];

    if (!fieldRules) return;

    // Skip non-required empty fields
    if (
      !fieldRules.isRequired &&
      (value === undefined || value === "" || value === null)
    )
      return;

    // Required
    if (fieldRules.isRequired) {
      if (typeof value === "boolean") {
        if (!value) {
          errors[field] =
            fieldRules.msg?.isRequired ||
            `${formatFieldName(String(field))} is required`;
          return;
        }
      } else if (!value || (typeof value === "string" && !value.trim())) {
        errors[field] =
          fieldRules.msg?.isRequired ||
          `${formatFieldName(String(field))} is required`;
        return;
      }
    }

    const stringValue =
      value !== undefined && value !== null ? String(value) : "";

    // Min Length
    if (fieldRules.minLength && stringValue.length < fieldRules.minLength) {
      errors[field] =
        fieldRules.msg?.minLength ||
        `${formatFieldName(String(field))} must be at least ${
          fieldRules.minLength
        } characters`;
      return;
    }

    // Max Length
    if (fieldRules.maxLength && stringValue.length > fieldRules.maxLength) {
      errors[field] =
        fieldRules.msg?.maxLength ||
        `${formatFieldName(String(field))} must not exceed ${
          fieldRules.maxLength
        } characters`;
      return;
    }

    // Min Value
    if (
      fieldRules.min !== undefined &&
      !isNaN(Number(stringValue)) &&
      Number(stringValue) < fieldRules.min
    ) {
      errors[field] =
        fieldRules.msg?.min ||
        `${formatFieldName(String(field))} must be at least ${fieldRules.min}`;
      return;
    }

    // Max Value
    if (
      fieldRules.max !== undefined &&
      !isNaN(Number(stringValue)) &&
      Number(stringValue) > fieldRules.max
    ) {
      errors[field] =
        fieldRules.msg?.max ||
        `${formatFieldName(String(field))} must not exceed ${fieldRules.max}`;
      return;
    }

    // Patterns
    if (fieldRules.pattern) {
      if (fieldRules.pattern === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(stringValue))
          errors[field] = fieldRules.msg?.pattern || "Invalid email format";
      } else if (fieldRules.pattern === "url") {
        try {
          new URL(stringValue);
        } catch {
          errors[field] = fieldRules.msg?.pattern || "Invalid URL format";
        }
      } else if (fieldRules.pattern === "phone") {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (
          !phoneRegex.test(stringValue) ||
          stringValue.replace(/\D/g, "").length < 10
        ) {
          errors[field] = fieldRules.msg?.pattern || "Invalid phone number";
        }
      } else if (fieldRules.pattern instanceof RegExp) {
        if (!fieldRules.pattern.test(stringValue)) {
          errors[field] =
            fieldRules.msg?.pattern ||
            `${formatFieldName(String(field))} format is invalid`;
        }
      } else {
        // string regex
        const regex = new RegExp(fieldRules.pattern);
        if (!regex.test(stringValue)) {
          errors[field] =
            fieldRules.msg?.pattern ||
            `${formatFieldName(String(field))} format is invalid`;
        }
      }
    }

    // Custom function
    if (typeof fieldRules.custom === "function") {
      const customError = fieldRules.custom(value, values);
      if (customError) errors[field] = customError;
    }

    // Match another field
    if (fieldRules.matches) {
      const matchValue = values[fieldRules.matches as keyof T];
      if (value !== matchValue) {
        errors[field] =
          fieldRules.msg?.matches ||
          `${formatFieldName(String(field))} must match ${formatFieldName(
            fieldRules.matches
          )}`;
      }
    }
  });

  return errors;
};

// --- useFormValidation Hook ---
const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  formRules: FormRules<T>,
  options: UseFormOptions = {}
) => {
  const {
    validateOnChange = false,
    validateOnBlur = true,
    resetOnSubmit = false,
  } = options;

  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rules, setRules] = useState<FormRules<T>>(formRules);

  // Sync rules logic if props change
  useEffect(() => {
    setRules(formRules);
  }, [formRules]);

  // Derived states
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const isDirty = useMemo(() => {
    return JSON.stringify(values) !== JSON.stringify(initialValues);
  }, [values, initialValues]);

  // Handle input change
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value, type } = e.target;
      const checked = (e.target as HTMLInputElement).checked;

      // We assume e.target.name matches a key in T
      const fieldName = name as keyof T;
      // For types check
      const newValue = (type === "checkbox" ? checked : value) as any;

      setValues((prev) => {
        const nextValues = { ...prev, [fieldName]: newValue };

        if (validateOnChange && touched[fieldName]) {
          // We validate against standard rules
          const validationErrors = validateForm(nextValues, rules);
          setErrors(validationErrors);
        }
        return nextValues;
      });
    },
    [validateOnChange, touched, rules]
  );

  // Handle blur
  const handleBlur = useCallback(
    (
      e: React.FocusEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name } = e.target;
      const fieldName = name as keyof T;

      setTouched((prev) => ({ ...prev, [fieldName]: true }));

      if (validateOnBlur) {
        // We need to use the functional update to ensure we have the latest values,
        // BUT validateForm is synchronous and we don't want to duplicate state logic.
        // We'll trust the dependency array or pass the current values if needed.
        // ACTUALLY: 'values' in the dependency array will update this closure.
        const validationErrors = validateForm(values, rules);
        setErrors(validationErrors);
      }
    },
    [validateOnBlur, values, rules]
  );

  // Handle submit
  const handleSubmit = useCallback(
    (
        onSuccess: (values: T) => Promise<void> | void,
        onError?: (errors: FormErrors<T> | any) => void
      ) =>
      async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const allTouched = (Object.keys(values) as Array<keyof T>).reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as Partial<Record<keyof T, boolean>>
        );
        setTouched(allTouched);

        const validationErrors = validateForm(values, rules);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
          try {
            await onSuccess(values);
            if (resetOnSubmit) {
              setValues(initialValues);
              setErrors({});
              setTouched({});
            }
          } catch (err) {
            if (onError) onError(err);
          }
        } else if (onError) {
          onError(validationErrors);
        }

        setIsSubmitting(false);
      },
    [values, rules, initialValues, resetOnSubmit]
  );

  const showError = (field: keyof T) => touched[field] && errors[field];

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  const setFieldValue = useCallback((field: keyof T, value: any) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  }, []);

  const validateField = useCallback(
    (field: keyof T) => {
      const fieldRule = rules[field];
      if (!fieldRule) return true;

      const singleFieldRule: FormRules<T> = { [field]: fieldRule } as any;
      const fieldErrors = validateForm(values, singleFieldRule);

      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
      return !fieldErrors[field];
    },
    [values, rules]
  );

  const validateAll = useCallback(() => {
    const validationErrors = validateForm(values, rules);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  }, [values, rules]);

  // Helper for ARIA/Accessibility
  const getFieldProps = useCallback(
    (name: keyof T) => ({
      name: String(name),
      value: values[name] ?? "",
      onChange: handleChange,
      onBlur: handleBlur,
      "aria-invalid": !!errors[name],
      "aria-errormessage": errors[name],
    }),
    [values, handleChange, handleBlur, errors]
  );

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    isDirty,
    rules,
    handleChange,
    handleBlur,
    handleSubmit,
    showError,
    setValues,
    setFieldValue,
    setFieldError,
    setRules,
    resetForm,
    validateField,
    validateAll,
    getFieldProps,
  };
};

export default useFormValidation;
