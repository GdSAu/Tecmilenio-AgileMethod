import { asProperty, fromConstant$ } from './index-B8bUhI8E.js';
import { listItemProperty } from './CESNSUMX-CEo4dwQO.js';
import { computeAction } from './ActionButton-D_YBiLZ6.js';
import './1OX6EehJ-ChqR_l5F.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
