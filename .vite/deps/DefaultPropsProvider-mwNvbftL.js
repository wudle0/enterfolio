import { i as __toESM, t as require_react } from "./react-3_O8oni9.js";
import { $ as defaultSxConfig, G as generateUtilityClass, T as useDefaultProps$1, mt as require_prop_types, pt as require_jsx_runtime, ut as isPlainObject, w as DefaultPropsProvider$1 } from "./styled-CXxAxlhF.js";
//#region node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var splitProps = (props) => {
	const result = {
		systemProps: {},
		otherProps: {}
	};
	const config = props?.theme?.unstable_sxConfig ?? defaultSxConfig;
	Object.keys(props).forEach((prop) => {
		if (config[prop]) result.systemProps[prop] = props[prop];
		else result.otherProps[prop] = props[prop];
	});
	return result;
};
function extendSxProp(props) {
	const { sx: inSx, ...other } = props;
	const { systemProps, otherProps } = splitProps(other);
	let finalSx;
	if (Array.isArray(inSx)) finalSx = [systemProps, ...inSx];
	else if (typeof inSx === "function") finalSx = (...args) => {
		const result = inSx(...args);
		if (!isPlainObject(result)) return systemProps;
		return {
			...systemProps,
			...result
		};
	};
	else finalSx = {
		...systemProps,
		...inSx
	};
	return {
		...otherProps,
		sx: finalSx
	};
}
//#endregion
//#region node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
	const result = {};
	slots.forEach((slot) => {
		result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
	});
	return result;
}
require_react();
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types(), 1);
var import_jsx_runtime = require_jsx_runtime();
function DefaultPropsProvider(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultPropsProvider$1, { ...props });
}
DefaultPropsProvider.propTypes = {
	children: import_prop_types.default.node,
	value: import_prop_types.default.object.isRequired
};
function useDefaultProps(params) {
	return useDefaultProps$1(params);
}
//#endregion
export { generateUtilityClasses as n, extendSxProp as r, useDefaultProps as t };

//# sourceMappingURL=DefaultPropsProvider-mwNvbftL.js.map