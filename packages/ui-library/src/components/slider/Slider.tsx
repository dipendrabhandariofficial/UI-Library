import React from "react";
import { CSSProperties } from "react";
import "./Slider.css";

interface SliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  label?: string;
  showValue?: boolean;
  color?: string;
  trackColor?: string;
  height?: string;
  thumbSize?: string;
  disabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label = "",
  showValue = true,
  color = "#3b82f6",
  trackColor = "gray",
  height = "6px",
  thumbSize = "16px",
  disabled = false,
}: SliderProps) => {
  return (
    <div className={`slider-container ${disabled ? "disabled" : ""}`}>
      {label && <label className="slider-label">{label}</label>}

      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(Number(e.target.value))}
          style={
            {
              "--slider-color": color,
              "--slider-track": trackColor,
              "--slider-height": height,
              "--thumb-size": thumbSize,
            } as CSSProperties
          }
          className="slider-input"
        />
      </div>

      {showValue && <span className="slider-value">{value}</span>}
    </div>
  );
};

export default Slider;
