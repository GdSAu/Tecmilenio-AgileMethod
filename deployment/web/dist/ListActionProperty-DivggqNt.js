import { asProperty, fromConstant$ } from './index-B2JBYcJC.js';
import { listItemProperty } from './D4nQ98US-Caj07FMS.js';
import { computeAction } from './ActionButton-Dv79O5ku.js';
import './DaFVLkxr-PApvqQxc.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
