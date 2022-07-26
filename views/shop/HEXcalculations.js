var GrossWeight = product.operating_weight + 65; // 운전중량

var ground_Length =
    product.undercarriage.tumbler_distance + 0.35 * (product.undercarriage.track_length - product.undercarriage.tumbler_distance);
var ground_pressure = GrossWeight / ((((2 * product.undercarriage.shoe_width) / 10) * ground_Length) / 10);
var quick_coupler_weight = Math.max(product.attachments.quick_coupler_weight_1, product.attachments.quick_coupler_weight_2);

var TM_rev_1 = (
    ((product.travel.pump_displacement * product.travel.TM_mv) /
        (product.travel.TM_flow_1 * product.travel.reduc)) *
    1000
).toFixed(2);
var TM_rev_2 = (
    ((product.travel.pump_displacement * product.travel.TM_mv) /
        (product.travel.TM_flow_2 * product.travel.reduc)) *
    1000
).toFixed(2);
var travel_speed_1 = (
    (TM_rev_1 * 2 * Math.PI * product.travel.sprocket_radius * 60) / 10 ** 6).toFixed(2);
var travel_speed_2 = (
    (TM_rev_2 * 2 * Math.PI * product.travel.sprocket_radius * 60) / 10 ** 6).toFixed(2);
var travel_speed = Math.max(travel_speed_1, travel_speed_2);

var TM_1 = (
    ((product.travel.pump_pressure * product.travel.TM_flow_1) /
        (200 * Math.PI)) *
    product.travel.reduc *
    product.travel.TM_mt
).toFixed(2);
var TM_2 = (
    ((product.travel.pump_pressure * product.travel.TM_flow_2) /
        (200 * Math.PI)) *
    product.travel.reduc *
    product.travel.TM_mt
).toFixed(2);
var Traction_Sprocket =
    ((2 * TM_2 * 1000) / product.travel.sprocket_radius) * product.travel.TM_r;
var ground_traction = product.travel.surface_drag * GrossWeight;

var TS = (
    ((2 * TM_1 * 1000) / product.travel.sprocket_radius) *
    product.travel.TM_r
).toFixed(0);
var AF = (
    product.travel.surface_drag *
    (product.operating_weight + 65)
).toFixed(2);
var DP = Math.min(TS, AF);

var theta_1 = (Math.atan(product.travel.surface_drag) * (180 / Math.PI)).toFixed(1);
var theta_2 = ((180 / Math.PI) * Math.asin((DP - product.travel.drag * GrossWeight) / GrossWeight)).toFixed(1);
var theta_3 = product.travel.greadability_ref;

var swing_reduction_rev = (
    ((product.swivel.pump_flow * product.swivel.motor_eff) /
        product.swivel.motor_displacement) *
    1000
).toFixed(2);

var swing_rev = (swing_reduction_rev / product.swivel.reduction).toFixed(1);