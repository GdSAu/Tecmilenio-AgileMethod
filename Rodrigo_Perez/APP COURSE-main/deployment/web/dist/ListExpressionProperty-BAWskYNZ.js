import { asProperty, toFriendlyId, fromConstant$, available, asDynamicValue$, getFormExpressionResult$, getVariableFromStore$ } from './index-CAr0kpKK.js';
import { listItemProperty } from './XQdQuDNG-DSqxqUMm.js';
import './BkqAssms-UB_bkK2K.js';

const ListExpressionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => function(config2, store2, widgetId2, object2) {
  const description = `Value of ${toFriendlyId(widgetId2)}`, object$ = fromConstant$(available(object2));
  return asDynamicValue$(getFormExpressionResult$(description, store2, config2.expression, (variable) => variable.widget === widgetId2 && "object" === variable.source ? object$ : getVariableFromStore$(description, store2, variable)));
}(config, store, widgetId, object), `List expression "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListExpressionProperty };
