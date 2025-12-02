import { asProperty, fromConstant$ } from './index-CAr0kpKK.js';
import { listItemProperty } from './XQdQuDNG-DSqxqUMm.js';
import { computeAction } from './ActionButton-BhLF8XeL.js';
import './BkqAssms-UB_bkK2K.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
