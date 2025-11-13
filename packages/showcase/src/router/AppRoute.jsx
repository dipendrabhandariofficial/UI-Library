import React, { use } from "react";
import Mainlayout from "../layouts/mainlayout/Mainlayout";
import { Routes, Route } from "react-router-dom";
import ButtonShowcase from "../pages/showcase/buttonshowcase/ButtonShowcase";
import AccordionShowcase from "../pages/showcase/accordionshowcase/AccordionShowcase";
import Overview from "../pages/Overview";
import NotFound from "../pages/Notfound";
import { Navigate } from "react-router-dom";
import SliderShowcase from "../pages/showcase/slidershowcase/Slidershowcase";
import Dropdownshowcase from "../pages/showcase/dropdownshowcase/Dropdownshowcase";
import TabShowcase from "../pages/showcase/tabshowcase/Tabshowcase";
import ImageSliderShowcase from "../pages/showcase/imageslidershowcase/Imageslidershowcase";
import UseLocalStorageShowcase from "../pages/hookshowcase/localstorageshowcase/UseLocalStorageShowcase";
import UseThemeShowcase from "../pages/hookshowcase/themeshowcase/UseThemeShowcase";
import UseToggleShowcase from "../pages/hookshowcase/toggleshowcase/UseToggleShowcase";
import ClickOutsideShowcase from "../pages/hookshowcase/clickoutsideshowcase/Clickoutsideshowcase";
import UseFormValidationShowcase from "../pages/hookshowcase/formvalidationshowcase/UseFormValidationShowcase";
import Copytoclipboardshowcase from "../pages/hookshowcase/copytoclipboardshowcase/Copytoclipboardshowcase";
import IntersectionObserverShowcase from "../pages/hookshowcase/intersectionobservershowcase/UseintersectionObserverShowcase";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/button" element={<ButtonShowcase/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accordion" element={<AccordionShowcase />} />
        <Route path="/dropdown" element={<Dropdownshowcase />} />
        <Route path="/slider" element={<SliderShowcase />} />
        <Route path="/tab" element={<TabShowcase />} />
        <Route path="/imageslider" element={<ImageSliderShowcase />} />


        {/* hooks  */}
        <Route path="/uselocalstorage" element={<UseLocalStorageShowcase />} />
        <Route path="/usetheme" element={<UseThemeShowcase />} />
        <Route path="/usetoggle" element={<UseToggleShowcase />} />
        <Route path="/useclickoutside" element={<ClickOutsideShowcase />} />
        <Route path="/useformvalidaton" element={<UseFormValidationShowcase/>} />
        <Route path="/usecopytoclipboard" element={<Copytoclipboardshowcase/>} />
        <Route path="/useintersectionobserver" element={<IntersectionObserverShowcase/>} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
