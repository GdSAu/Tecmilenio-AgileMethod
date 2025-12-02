import { asProperty, fromConstant$ } from './index-_VvUQn72.js';
import { listItemProperty } from './XQdQuDNG-BZYRYnBv.js';
import { computeAction } from './ActionButton-CBeuPgPB.js';
import './BkqAssms-BjvYwt-y.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
