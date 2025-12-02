import { asProperty, fromConstant$ } from './index-D54rfXjv.js';
import { listItemProperty } from './XQdQuDNG-MasuQoi0.js';
import { computeAction } from './ActionButton-Cg_9OV9E.js';
import './BkqAssms-AUPua_wR.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
