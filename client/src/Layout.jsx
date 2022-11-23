import React from 'react';
import {Route, Routes} from "react-router-dom";
import Movement from "./pages/Movement";
import Velocity from "./pages/Velocity";
import Inertia from "./pages/Inertia";
import Mass from "./pages/Mass";
import Force from "./pages/Force";
import Gravity from "./pages/Gravity";
import ElasticForce from "./pages/ElasticForce";
import BodyWeight from "./pages/BodyWeight";
import SumForce from "./pages/SumForce";
import FrictionForce from "./pages/FrictionForce";
import Pressure from "./pages/Pressure";
import PressureGas from "./pages/PressureGas";
import PressureTransmission from "./pages/PressureTransmission";
import PressureCalculation from "./pages/PressureCalculation";
import SubmergedBody from "./pages/SubmergedBody";
import SwimmingBodies from "./pages/SwimmingBodies";
import MechanicalWork from "./pages/MechanicalWork";
import Power from "./pages/Power";
import LeverArm from "./pages/LeverArm";
import MomentForce from "./pages/MomentForce";
import Block from "./pages/Block";
import BodyBalance from "./pages/BodyBalance";
import Energy from "./pages/Energy";
import TypesEnergies from "./pages/TypesEnergies";
import ConvertEnergy from "./pages/ConvertEnergy";
import Temperature from "./pages/Temperature";
import InternalEnergy from "./pages/InternalEnergy";
import ThermalConductivity from "./pages/ThermalConductivity";
import Convection from "./pages/Convection";
import Radiation from "./pages/Radiation";
import SpecificHeat from "./pages/SpecificHeat";
import HeatCombustion from "./pages/HeatCombustion";
import Melting from "./pages/Melting";
import Evaporation from "./pages/Evaporation";

const Layout = () => {
    var e = 7;
    return (
        <div className="qw1">
            <Routes>
                <Route path="/" element={<Movement/>} />
                <Route path="/Movement" element={<Movement/>} />
                <Route path="/Velocity" element={<Velocity/>} />
                <Route path="/Inertia" element={<Inertia/>} />
                <Route path="/Mass_and_density" element={<Mass/>} />
                <Route path="/Force" element={<Force/>} />
                <Route path="/Gravity" element={<Gravity/>} />
                <Route path="/Elastic_force" element={<ElasticForce/>} />
                <Route path="/BodyWeight" element={<BodyWeight/>} />
                <Route path="/SumForce" element={<SumForce/>} />
                <Route path="/FrictionForce" element={<FrictionForce/>} />

                <Route path="/Pressure" element={<Pressure/>} />
                <Route path="/PressureGas" element={<PressureGas/>} />
                <Route path="/PressureTransmission" element={<PressureTransmission/>} />
                <Route path="/PressureCalculation" element={<PressureCalculation/>} />
                <Route path="/SubmergedBody" element={<SubmergedBody/>} />
                <Route path="/SwimmingBodies" element={<SwimmingBodies/>} />

                <Route path="/MechanicalWork" element={<MechanicalWork/>} />
                <Route path="/Power" element={<Power/>} />
                <Route path="/LeverArm" element={<LeverArm/>} />
                <Route path="/MomentForce" element={<MomentForce/>} />
                <Route path="/Block" element={<Block/>} />
                <Route path="/BodyBalance" element={<BodyBalance/>} />
                <Route path="/Energy" element={<Energy/>} />
                <Route path="/TypesEnergies" element={<TypesEnergies/>} />
                <Route path="/ConvertEnergy" element={<ConvertEnergy/>} />

                <Route path="/Temperature" element={<Temperature/>} />
                <Route path="/InternalEnergy" element={<InternalEnergy/>} />
                <Route path="/ThermalConductivity" element={<ThermalConductivity/>} />
                <Route path="/Convection" element={<Convection/>} />
                <Route path="/Radiation" element={<Radiation/>} />
                <Route path="/SpecificHeat" element={<SpecificHeat/>} />
                <Route path="/HeatCombustion" element={<HeatCombustion/>} />
                <Route path="/Melting" element={<Melting/>} />
                <Route path="/Evaporation" element={<Evaporation/>} />
            </Routes>
        </div>
    );
};

export default Layout;