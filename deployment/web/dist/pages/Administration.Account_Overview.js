import { getFocus, getHTMLElement, ensure, isNavigableElement, isHTMLElement, reactExports, newId, reaction, useForceUpdate, tuple, Big, repeat, useStoreBackendValue, readUntracked, jsxRuntimeExports, classNames, NestedStoreProvider, when, observable, runInAction, asPluginWidgets, selectTranslation } from '../index-D54rfXjv.js';
import { PageFragment, Div, ExpressionProperty } from '../ScrollContainer-BjzP0wD4.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Cg_9OV9E.js';
import { DatabaseObjectListProperty } from '../XQdQuDNG-MasuQoi0.js';
import { ListActionProperty } from '../ListActionProperty-DOOx3qNN.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Cim9im-1.js';
import { ListExpressionProperty } from '../ListExpressionProperty-iDZDI-u-.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-DDSTmm8l.js';
import { WebIconProperty } from '../WebIconProperty-BMRF9qCt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-Hlwkz0qB.js';
import { Container } from '../Image-DBqlkM53.js';
import { DatagridWidgetModule } from '../Datagrid-DuITFOZI.js';
import { DatagridDateFilterWidgetModule, DatagridTextFilterWidgetModule } from '../DatagridTextFilter-TkGozO4L.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-DBos3_3N.js';
import { useLegacyResize, getBox } from '../DmsI6saM-CRBfA3bF.js';
import { usePersistentState } from '../FeedbackModule.ACT_Open_Feedback_Modal-D3zrta9x.js';
import { isRightToLeft } from '../EJisauA3-DXAVeWbJ.js';
import { Text } from '../Text-Dwd-U4AU.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-Bd4fJsXP.js';
import '../BkqAssms-AUPua_wR.js';
import '../3ZSM-Jib-DprIUIuq.js';
import '../InlineText-rQyIsJj9.js';
import '../WebStaticImageProperty-BT2Uh9-H.js';

var NavigationKeys, NavigationCommand;
!function(NavigationKeys2) {
  NavigationKeys2[NavigationKeys2.UpDown = 0] = "UpDown", NavigationKeys2[NavigationKeys2.LeftRight = 1] = "LeftRight";
}(NavigationKeys || (NavigationKeys = {})), function(NavigationCommand2) {
  NavigationCommand2[NavigationCommand2.FORWARD = 0] = "FORWARD", NavigationCommand2[NavigationCommand2.BACKWARD = 1] = "BACKWARD";
}(NavigationCommand || (NavigationCommand = {}));
class RovingTabIndex {
  constructor(keys, container, childQuery = findNavigableDescendants) {
    this.children = [], this.currentIndex = -1, this.focused = false, this.updating = false, this.shiftingFocus = false, this.mutationObserver = new MutationObserver(this.onMutation.bind(this)), this.keys = keys, this.container = container, this.childQuery = childQuery, this.keyListener = this.createKeyListener(), this.focusInListener = this.createFocusInListener(), this.focusOutListener = this.createFocusOutListener(), this.addListeners(), this.handleMutation();
  }
  onMutation(_records) {
    this.handleMutation();
  }
  handleMutation() {
    const children = (elements = this.childQuery(this.container), Array.isArray(elements) ? elements : Array.from(elements).filter((e) => e instanceof HTMLElement)).filter((c) => !c.hasAttribute("data-roving-inactive"));
    var elements;
    this.doWithoutMutations(() => this.updateChildren(children));
  }
  setChildQuery(childQuery = findNavigableDescendants) {
    this.childQuery = childQuery;
  }
  setOnActiveRowChange(callback) {
    this.onActiveRowChange = callback;
  }
  setContainer(newContainer) {
    this.container !== newContainer && (this.removeListeners(), this.container = newContainer, this.addListeners(), this.handleMutation());
  }
  updateChildren(newChildren) {
    const oldCurrent = this.getCurrentElement();
    if (function(oldChildren, newChildren2) {
      if (a = oldChildren, b = newChildren2, a.length === b.length && a.every((e, i) => e === b[i]))
        return false;
      var a, b;
      const oldSet = /* @__PURE__ */ new Set();
      return oldChildren.forEach((v) => oldSet.add(v)), newChildren2.forEach((v) => {
        oldSet.delete(v) || v.setAttribute("data-roving-tabindex", "");
      }), oldSet.forEach((v) => unmanageElement(v)), true;
    }(this.children, newChildren) && (this.children = newChildren.slice()), oldCurrent) {
      const newIndex = newChildren.indexOf(oldCurrent);
      if (this.setCurrentIndex(-1 !== newIndex ? newIndex : this.findValidIndex(false, 0)), this.focused) {
        const newCurrent = this.getCurrentElement();
        setTimeout(() => this.restoreFocus(oldCurrent !== newCurrent), 0);
      }
    } else
      this.updateTabIndices();
    this.updateState();
  }
  restoreFocus(force) {
    if (this.shiftingFocus && !force)
      return;
    const active = getFocus(), current = this.getCurrentElement();
    (force || !active || current && current !== active && current.contains(active)) && this.focusCurrentElement();
  }
  updateState() {
    const current = this.getCurrentElement();
    current && isInteractive(current) || (this.setCurrentIndex(this.findValidIndex()), this.focused && this.focusCurrentElement());
  }
  destroy() {
    this.mutationObserver.disconnect(), this.removeListeners(), this.children.forEach(unmanageElement);
  }
  addListeners() {
    this.container.addEventListener("keydown", this.keyListener), this.container.addEventListener("focusin", this.focusInListener), this.container.addEventListener("focusout", this.focusOutListener);
  }
  removeListeners() {
    this.container.removeEventListener("keydown", this.keyListener), this.container.removeEventListener("focusin", this.focusInListener), this.container.removeEventListener("focusout", this.focusOutListener);
  }
  doWithoutMutations(callback) {
    const wasUpdating = this.updating;
    wasUpdating || (this.updating = true, this.mutationObserver.disconnect()), callback(), wasUpdating || (this.mutationObserver.observe(this.container, { childList: true, attributes: true, subtree: true }), this.updating = false);
  }
  createKeyListener() {
    return (e) => {
      const command = this.getNavigationCommand(e);
      if (null !== command) {
        e.preventDefault();
        const reverse = command.valueOf() === NavigationCommand.BACKWARD.valueOf();
        this.setCurrentIndex(this.findValidIndex(reverse)), this.focusCurrentElement();
      }
    };
  }
  createFocusInListener() {
    return (e) => {
      const target = getHTMLElement(ensure(e.target));
      let newIndex = -1, current = target;
      for (; current && (newIndex = this.children.indexOf(current), -1 === newIndex); )
        current = current.parentElement;
      -1 !== newIndex && this.setCurrentIndex(newIndex), target && target !== current && !isNavigableElement(target) && window.setTimeout(() => this.focusCurrentElement(), 0), this.focused = true;
    };
  }
  createFocusOutListener() {
    return (e) => {
      const current = this.getCurrentElement(), relatedTarget = getHTMLElement(ensure(e.relatedTarget ?? document.activeElement));
      this.shiftingFocus = true, relatedTarget && this.container.contains(relatedTarget) || window.setTimeout(() => {
        this.focused = false;
      }, 0), ensure(e.target) === current && window.setTimeout(() => {
        isInteractive(current) && null !== current.parentNode || this.doWithoutMutations(() => {
          this.updateState(), this.focusCurrentElement();
        });
      }, 0), window.setTimeout(() => {
        this.shiftingFocus = false;
      }, 0);
    };
  }
  getNavigationCommand(e) {
    switch (this.keys) {
      case NavigationKeys.UpDown:
        switch (e.key) {
          case "ArrowUp":
          case "Up":
            return NavigationCommand.BACKWARD;
          case "ArrowDown":
          case "Down":
            return NavigationCommand.FORWARD;
        }
        break;
      case NavigationKeys.LeftRight: {
        const rtl = isRightToLeft();
        switch (e.key) {
          case "ArrowLeft":
          case "Left":
            return rtl ? NavigationCommand.FORWARD : NavigationCommand.BACKWARD;
          case "ArrowRight":
          case "Right":
            return rtl ? NavigationCommand.BACKWARD : NavigationCommand.FORWARD;
        }
        break;
      }
    }
    return null;
  }
  setCurrentIndex(index) {
    this.currentIndex = index, this.updateTabIndices(), this.onActiveRowChange && this.onActiveRowChange(index);
  }
  focusCurrentElement() {
    const current = this.getCurrentElement();
    current && current.focus();
  }
  updateTabIndices() {
    this.doWithoutMutations(() => {
      this.children.forEach((c, i) => c.setAttribute("tabindex", i === this.currentIndex ? "0" : "-1"));
    });
  }
  findValidIndex(reverse = false, offset = 1, startIndex = this.currentIndex) {
    const newIndex = reverse ? findLastIndexInArray(this.children, isInteractive, startIndex - offset) : findFirstIndexInArray(this.children, isInteractive, startIndex + offset);
    return -1 !== newIndex ? newIndex : reverse ? findFirstIndexInArray(this.children, isInteractive) : findLastIndexInArray(this.children, isInteractive);
  }
  getCurrentElement() {
    return -1 !== this.currentIndex ? this.children[this.currentIndex] : null;
  }
}
function unmanageElement(e) {
  e.removeAttribute("tabindex"), e.removeAttribute("data-roving-tabindex");
}
function findFirstIndexInArray(elements, predicate, startIndex = 0) {
  const index = elements.slice(startIndex).findIndex(predicate);
  return -1 === index ? -1 : index + startIndex;
}
function findLastIndexInArray(elements, predicate, startIndex = elements.length - 1) {
  const index = elements.slice(0, startIndex + 1).reverse().findIndex(predicate);
  return -1 === index ? -1 : startIndex - index;
}
function findNavigableDescendants(element, output = []) {
  for (let i = 0, len = element.children.length; i < len; i++) {
    const child = element.children.item(i);
    isHTMLElement(child) && ((child.hasAttribute("data-roving-tabindex") || isNavigableElement(child)) && output.push(child), findNavigableDescendants(child, output));
  }
  return output;
}
function isInteractive(element) {
  return function(element2) {
    const computedStyle = window.getComputedStyle(element2);
    return "visible" === computedStyle.visibility && "none" !== computedStyle.display;
  }(element) && function(element2) {
    return !element2.disabled;
  }(element);
}
function useRovingTabIndex(elementRef, navigationKeys, childQuery) {
  reactExports.useLayoutEffect(() => {
    const rovingTabIndex = new RovingTabIndex(navigationKeys, ensure(elementRef.current), childQuery);
    return () => rovingTabIndex.destroy();
  }, [elementRef, navigationKeys, childQuery]);
}

function TabContainer(props) {
  const id = reactExports.useState(() => newId())[0], [selectedTabIndex, selectionHasChanged, setSelectedTabIndex] = function(tabs, defaultTab, controlValue, onSelectedTabChange) {
    const isControlled = void 0 !== controlValue, [currentIndex, setCurrentIndex] = usePersistentState("selectedTab", isControlled ? -1 : defaultTab), isInitialized = reactExports.useRef(false), isLoaded = function(tabs2, controlValue2) {
      const loaded2 = reactExports.useRef(false);
      if (!loaded2.current) {
        const tabsLoaded = tabs2.every((tab) => !tab.isVisible || "available" === tab.isVisible.status), controlAttrLoaded = void 0 === controlValue2 || "available" === controlValue2.status;
        loaded2.current = tabsLoaded && controlAttrLoaded;
      }
      return loaded2.current;
    }(tabs, controlValue), controlledIndex = function(tabs2, activeTab) {
      const getIndex = () => {
        if (!activeTab)
          return -1;
        const index = activeTab.value?.toNumber() ?? 0;
        return inRange(index, 1, tabs2.length) ? index - 1 : -1;
      };
      return useSyncBox(getIndex());
    }(tabs, controlValue);
    let updatedIndex = -1;
    if (isInitialized.current)
      updatedIndex = computeVisibleIndex(tabs, currentIndex), currentIndex !== updatedIndex && setCurrentIndex(updatedIndex);
    else if (isLoaded) {
      updatedIndex = computeVisibleIndex(tabs, isControlled ? controlledIndex.get() : currentIndex), setCurrentIndex(updatedIndex), isInitialized.current = true;
    }
    const selectedIndex = useSyncBox(updatedIndex), loaded = useSyncBox(isLoaded);
    return useWhen(() => loaded.get(), () => reaction(() => controlledIndex.get(), (index) => {
      -1 !== index && setCurrentIndex(index);
    })), useWhen(() => loaded.get(), () => reaction(() => selectedIndex.get(), onSelectedTabChange)), function(currentIndex2, setIndex) {
      const forceUpdate = useForceUpdate(), [changed, markAsChanged] = function(value) {
        const ref = reactExports.useRef(value), purge = reactExports.useRef(() => {
          ref.current = {};
        }).current;
        return [ref.current !== (ref.current = value), purge];
      }(currentIndex2);
      function selectTabIndex(tabIndex) {
        tabIndex === currentIndex2 ? (markAsChanged(), forceUpdate()) : setIndex(tabIndex);
      }
      return tuple(currentIndex2, changed, selectTabIndex);
    }(selectedIndex.get(), setCurrentIndex);
  }(props.tabs, props.defaultTab, props.activeTab, (tabIndex) => {
    props.activeTab && !props.activeTab.readOnly && props.activeTab.setValue(new Big(tabIndex + 1)), executeAction(props.onTabChange);
  }), tabsState = function(tabs, selectedTabIndex2, selectionHasChanged2) {
    const tabStateRef = reactExports.useRef(tabs.map((tab) => !tab.isDelayed && isVisible(tab) ? { key: 0 } : "hidden"));
    if (-1 !== selectedTabIndex2) {
      const selectedTabState = ensure(tabStateRef.current[selectedTabIndex2]);
      "hidden" === selectedTabState ? tabStateRef.current[selectedTabIndex2] = { key: 0 } : selectionHasChanged2 && ensure(tabs[selectedTabIndex2]).refreshOnShow && (selectedTabState.key += 1);
    }
    return tabStateRef.current;
  }(props.tabs, selectedTabIndex, selectionHasChanged), [invalidCounts, handleStore] = function(widgetName, length) {
    const [invalidCounts2, setInvalidCounts] = reactExports.useState(() => repeat(length, () => 0)), disposersRef = reactExports.useRef(repeat(length, () => {
    }));
    function handleStore2(store, index) {
      disposersRef.current[index]?.();
      const allInvalid$ = store.getAll$("isInvalid");
      disposersRef.current[index] = reaction(() => allInvalid$.dependOn().filter(Boolean).length, (invalidCount) => {
        setInvalidCounts((prevInvalidCounts) => {
          const newInvalidCounts = [...prevInvalidCounts];
          return newInvalidCounts[index] = invalidCount, newInvalidCounts;
        });
      }, { fireImmediately: false, name: `Validation of tab ${index} of ${widgetName}` });
    }
    return reactExports.useEffect(() => () => disposersRef.current.forEach((d) => d?.()), []), tuple(invalidCounts2, handleStore2);
  }(props.name, props.tabs.length), tabContainerNode = reactExports.useRef(null), tabListNode = reactExports.useRef(null), tabContentNode = reactExports.useRef(null);
  return useRovingTabIndex(tabListNode, NavigationKeys.LeftRight, reactExports.useCallback((element) => element.querySelectorAll("a"), [])), useLegacyResize(tabContainerNode, reactExports.useCallback(function(container) {
    const tabContent = ensure(tabContentNode.current);
    if (!container)
      return tabContent.style.height = "auto", void (tabContent.style.overflow = "");
    const parentBox = getBox(container), tabListBox = getBox(ensure(tabListNode.current)), remainder = parentBox.contentBox.height - tabListBox.marginBox.height;
    remainder > 100 ? (tabContent.style.height = `${remainder}px`, tabContent.style.overflow = "auto") : (tabContent.style.height = "auto", tabContent.style.overflow = "");
  }, [tabContentNode, tabListNode])), props.hoistedSelections?.forEach((s) => {
    const [value$, setValue] = useStoreBackendValue(s, "selection");
    setValue(readUntracked(value$));
  }), jsxRuntimeExports.jsxs("div", { className: classNames("mx-tabcontainer", props.class), style: props.style, "data-focusindex": props.tabIndex, ref: tabContainerNode, children: [jsxRuntimeExports.jsx("ul", { className: "nav nav-tabs mx-tabcontainer-tabs", role: "tablist", ref: tabListNode, children: props.tabs.map((tab, index) => isVisible(tab) ? jsxRuntimeExports.jsxs("li", { className: classNames({ active: selectedTabIndex === index }), role: "presentation", onClick: (e) => {
    setSelectedTabIndex(index), e.preventDefault();
  }, children: [jsxRuntimeExports.jsxs("a", { href: "#", className: `mx-name-${tab.name}`, id: `${id}-t${index}`, "aria-controls": `${id}-p${index}`, role: "tab", "aria-selected": selectedTabIndex === index, children: [tab.caption.value, tab.badge && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-badge", style: { display: tab.badge.value ? "inline-block" : "none" }, children: tab.badge.value })] }), ensure(invalidCounts[index]) > 0 && jsxRuntimeExports.jsx("span", { className: "mx-tabcontainer-indicator", children: invalidCounts[index] })] }, index) : void 0) }), jsxRuntimeExports.jsx("div", { className: "tab-content mx-tabcontainer-content", "data-focusindex": "0", ref: tabContentNode, children: props.tabs.map((tab, index) => {
    const tabState = ensure(tabsState[index]), isContentVisible = reactExports.useMemo(() => void 0 === tab.isVisible || !!tab.isVisible.value, [tab.isVisible]);
    return jsxRuntimeExports.jsx("div", { className: classNames("tab-pane mx-tabcontainer-pane", { active: selectedTabIndex === index }), style: isVisible(tab) ? void 0 : { display: "none" }, id: `${id}-p${index}`, role: "tabpanel", "aria-labelledby": `${id}-t${index}`, children: jsxRuntimeExports.jsx(NestedStoreProvider, { namespace: `${props.widgetId}.${index}`, setupStore: reactExports.useCallback((store) => handleStore(store, index), []), children: "hidden" !== tabState && isContentVisible ? jsxRuntimeExports.jsx(PageFragment, { renderKey: tabState.key, children: tab.content }) : null }) }, index);
  }) })] });
}
function isVisible(tab) {
  return !tab.isVisible || "loading" === tab.isVisible.status && void 0 === tab.isVisible.value || Boolean(tab.isVisible.value);
}
const inRange = (n, min, max) => n >= min && n <= max;
function computeVisibleIndex(tabs, startIndex) {
  if (!inRange(startIndex, 0, tabs.length - 1))
    return -1;
  const index = function(tabs2, start) {
    let index2 = start;
    for (; !isVisible(ensure(tabs2[index2])); )
      if (index2 = (index2 + 1) % tabs2.length, index2 === start)
        return -1;
    return index2;
  }(tabs, startIndex);
  return -1 === index ? startIndex : index;
}
function useWhen(cond, cb) {
  reactExports.useEffect(() => {
    const disposeFns = [];
    return disposeFns.push(when(cond, () => {
      disposeFns.push(cb());
    })), () => {
      disposeFns.forEach((dispose) => dispose());
    };
  }, []);
}
function useSyncBox(value) {
  const [box] = reactExports.useState(() => observable.box(value));
  return runInAction(() => box.set(value)), box;
}
const executeAction = (action) => {
  action && action.canExecute && !action.isExecuting && action.execute();
};

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $TabContainer, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, TabContainer, Datagrid, DatagridTextFilter, DatagridDropdownFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p.Administration.Account_Overview.container1",
      $widgetId: "p.Administration.Account_Overview.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Overview.layoutGrid1",
            $widgetId: "p.Administration.Account_Overview.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Overview.layoutGrid1$row0",
                  $widgetId: "p.Administration.Account_Overview.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.Administration.Account_Overview.layoutGrid1$row0$column0",
                        $widgetId: "p.Administration.Account_Overview.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.Account_Overview.label1",
                              $widgetId: "p.Administration.Account_Overview.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Account Overview" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Administration.Account_Overview.label2",
                              $widgetId: "p.Administration.Account_Overview.label2",
                              class: "mx-name-label2 pageheader-subtitle",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "These are the local users of your app. Please note that only these users should be managed in this app. MendixSSO users are provisioned by the MendixSSO module and should be managed from the App User Management screen (Developer Portal > General Settings > Manage App Users)." }, "args": {} }
                                })
                              ]),
                              renderMode: "h4"
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Administration.Account_Overview.layoutGrid4",
      $widgetId: "p.Administration.Account_Overview.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Administration.Account_Overview.layoutGrid4$row0",
            $widgetId: "p.Administration.Account_Overview.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Administration.Account_Overview.layoutGrid4$row0$column0",
                  $widgetId: "p.Administration.Account_Overview.layoutGrid4$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $TabContainer,
                      {
                        key: "p.Administration.Account_Overview.tabControl",
                        $widgetId: "p.Administration.Account_Overview.tabControl",
                        class: "mx-name-tabControl tabsfullwidth",
                        style: void 0,
                        tabIndex: void 0,
                        widgetId: "p.Administration.Account_Overview.tabControl",
                        defaultTab: 0,
                        onTabChange: void 0,
                        tabs: [
                          {
                            "name": "tabPage2",
                            "caption": TextProperty({
                              "value": selectTranslation([
                                "Local Users"
                              ])
                            }),
                            "isDelayed": false,
                            "refreshOnShow": false,
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $Datagrid,
                                {
                                  key: "p.Administration.Account_Overview.dataGrid21",
                                  $widgetId: "p.Administration.Account_Overview.dataGrid21",
                                  advanced: false,
                                  datasource: DatabaseObjectListProperty({
                                    "dataSourceId": "p.14",
                                    "entity": "Administration.Account",
                                    "operationId": "rMcW+nfTpFq61Qqy9CYZkQ",
                                    "sort": [
                                      [
                                        "FullName",
                                        "asc"
                                      ]
                                    ],
                                    "constraints": { "type": "function", "name": "and", "parameters": [{ "type": "function", "name": "or", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole", "attributeType": "ObjectReferenceSet" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole1", "right": { "type": "attribute", "attribute": "System.grantableRoles", "context": "System.UserRole1", "attributeType": "ObjectReferenceSet" }, "next": { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "System.UserRole1", "attributeType": "ObjectReference" }, "rightEntity": "System.User", "rightEntityAlias": "System.User", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.User", "attributeType": "ObjectReferenceSet" }, "next": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "id", "context": "System.User", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] } } } }, { "type": "function", "name": "not", "parameters": [{ "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "Administration.Account", "attributeType": "ObjectReference" }, "rightEntity": "System.UserRole", "rightEntityAlias": "System.UserRole2", "right": { "type": "attribute", "attribute": "System.UserRoles", "context": "System.UserRole2", "attributeType": "ObjectReferenceSet" }, "next": { "type": "attribute", "attribute": "id", "context": "System.UserRole2", "attributeType": "ObjectReference" } }] }] }, { "type": "function", "name": "!=", "parameters": [{ "type": "attribute", "attribute": "Name", "context": "Administration.Account", "attributeType": "String" }, { "type": "literal", "value": null }] }] }
                                  }),
                                  refreshInterval: 0,
                                  itemSelectionMethod: "checkbox",
                                  showSelectAllToggle: true,
                                  columns: [
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Full name" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.Administration.Account_Overview.textFilter1",
                                            $widgetId: "p.Administration.Account_Overview.textFilter1",
                                            defaultValue: void 0,
                                            defaultFilter: "contains",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            delay: 500,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
                                            class: "mx-name-textFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Login" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridTextFilter,
                                          {
                                            key: "p.Administration.Account_Overview.textFilter2",
                                            $widgetId: "p.Administration.Account_Overview.textFilter2",
                                            defaultValue: void 0,
                                            defaultFilter: "contains",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            delay: 500,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
                                            class: "mx-name-textFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "System.UserRoles/System.UserRole",
                                        "entity": "System.UserRole",
                                        "attribute": "Name",
                                        "attributeType": "String",
                                        "sortable": false,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": true
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Roles" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter1",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter1",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "None" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: true,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "dynamicText",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "LastLogin",
                                        "attributeType": "DateTime",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        ListExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "LastLogin" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } },
                                          "dataSourceId": "p.14"
                                        })
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Last login" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDateFilter,
                                          {
                                            key: "p.Administration.Account_Overview.dateFilter1",
                                            $widgetId: "p.Administration.Account_Overview.dateFilter1",
                                            defaultValue: void 0,
                                            defaultStartDate: void 0,
                                            defaultEndDate: void 0,
                                            defaultFilter: "equal",
                                            placeholder: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            adjustable: true,
                                            onChange: void 0,
                                            screenReaderButtonCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderCalendarCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            screenReaderInputCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            attrChoice: "auto",
                                            linkedDs: void 0,
                                            attributes: [],
                                            class: "mx-name-dateFilter1",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "Active",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.text2$visibility",
                                              $widgetId: "p.Administration.Account_Overview.text2$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Active" }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p.Administration.Account_Overview.text2",
                                                    $widgetId: "p.Administration.Account_Overview.text2",
                                                    class: "mx-name-text2 badge label-success",
                                                    style: void 0,
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                                      })
                                                    ]),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.text3$visibility",
                                              $widgetId: "p.Administration.Account_Overview.text3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Active" }] }, "args": { "currentObject": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } } }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $Text,
                                                  {
                                                    key: "p.Administration.Account_Overview.text3",
                                                    $widgetId: "p.Administration.Account_Overview.text3",
                                                    class: "mx-name-text3 badge label-secondary",
                                                    style: void 0,
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Inactive" }, "args": {} }
                                                      })
                                                    ]),
                                                    renderMode: "span"
                                                  }
                                                )
                                              ]
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter2",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter2",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter2",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "WebServiceUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Web service user" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter3",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter3",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter3",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "attribute",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "IsLocalUser",
                                        "attributeType": "Boolean",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": void 0,
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "Local" }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": [
                                        /* @__PURE__ */ React.createElement(
                                          $DatagridDropdownFilter,
                                          {
                                            key: "p.Administration.Account_Overview.drop_downFilter4",
                                            $widgetId: "p.Administration.Account_Overview.drop_downFilter4",
                                            auto: true,
                                            defaultValue: void 0,
                                            filterOptions: [],
                                            emptyOptionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            multiSelect: false,
                                            onChange: void 0,
                                            ariaLabel: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            filterable: false,
                                            clearable: true,
                                            selectedItemsStyle: "text",
                                            selectionMethod: "checkbox",
                                            baseType: "attr",
                                            linkedDs: void 0,
                                            attrChoice: "auto",
                                            refOptions: void 0,
                                            refCaptionSource: "attr",
                                            fetchOptionsLazy: false,
                                            emptySelectionCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                              })
                                            ]),
                                            filterInputPlaceholderCaption: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                              })
                                            ]),
                                            class: "mx-name-drop_downFilter4",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ],
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": true,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "yes",
                                      "width": "autoFill",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    },
                                    {
                                      "showContentAs": "customContent",
                                      "attribute": ListAttributeProperty({
                                        "path": "",
                                        "entity": "Administration.Account",
                                        "attribute": "FullName",
                                        "attributeType": "String",
                                        "sortable": true,
                                        "filterable": true,
                                        "dataSourceId": "p.14",
                                        "isList": false
                                      }),
                                      "content": TemplatedWidgetProperty({
                                        "dataSourceId": "p.14",
                                        "editable": false,
                                        "children": () => [
                                          /* @__PURE__ */ React.createElement(
                                            $ConditionalVisibilityWrapper,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton3$visibility",
                                              $widgetId: "p.Administration.Account_Overview.actionButton3$visibility",
                                              visible: ExpressionProperty({
                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                              }),
                                              contents: [
                                                /* @__PURE__ */ React.createElement(
                                                  $ActionButton,
                                                  {
                                                    key: "p.Administration.Account_Overview.actionButton3",
                                                    $widgetId: "p.Administration.Account_Overview.actionButton3",
                                                    buttonId: "p.Administration.Account_Overview.actionButton3",
                                                    class: "mx-name-actionButton3 btn-lg",
                                                    style: void 0,
                                                    tabIndex: void 0,
                                                    renderType: "link",
                                                    role: "button",
                                                    buttonClass: "btn-default",
                                                    caption: selectTranslation([
                                                      ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                      })
                                                    ]),
                                                    tooltip: TextProperty({
                                                      "value": selectTranslation([
                                                        ""
                                                      ])
                                                    }),
                                                    icon: WebIconProperty({
                                                      "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-pencil" }
                                                    }),
                                                    action: ActionProperty({
                                                      "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                      "abortOnServerValidation": true
                                                    })
                                                  }
                                                )
                                              ]
                                            }
                                          ),
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton4",
                                              $widgetId: "p.Administration.Account_Overview.actionButton4",
                                              buttonId: "p.Administration.Account_Overview.actionButton4",
                                              class: "mx-name-actionButton4 btn-lg spacing-outer-left-medium",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "link",
                                              role: "button",
                                              buttonClass: "btn-default",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: WebIconProperty({
                                                "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-trash-can" }
                                              }),
                                              action: ActionProperty({
                                                "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "closePage": false, "operationId": "1iOCNEq6qFmSSeLTDuzL3Q" }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }),
                                      "dynamicText": selectTranslation([
                                        void 0
                                      ]),
                                      "header": selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                        })
                                      ]),
                                      "tooltip": selectTranslation([
                                        void 0
                                      ]),
                                      "filter": void 0,
                                      "visible": ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                      }),
                                      "sortable": false,
                                      "resizable": true,
                                      "draggable": true,
                                      "hidable": "no",
                                      "width": "autoFit",
                                      "size": 1,
                                      "alignment": "left",
                                      "wrapText": false,
                                      "minWidth": "auto",
                                      "minWidthLimit": 100,
                                      "exportValue": selectTranslation([
                                        void 0
                                      ]),
                                      "allowEventPropagation": true
                                    }
                                  ],
                                  columnsFilterable: true,
                                  pageSize: 20,
                                  pagination: "buttons",
                                  pagingPosition: "bottom",
                                  showPagingButtons: "always",
                                  showEmptyPlaceholder: "none",
                                  emptyPlaceholder: void 0,
                                  rowClass: void 0,
                                  onClick: ListActionProperty({
                                    "action": { "type": "openPage", "argMap": { "param$Account": { "widget": "p.Administration.Account_Overview.dataGrid21", "source": "object" } }, "config": { "name": "Administration/Account_Edit.page.xml", "location": "modal", "resizable": true, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                    "abortOnServerValidation": false,
                                    "dataSourceId": "p.14",
                                    "argumentTypes": {}
                                  }),
                                  onSelectionChange: void 0,
                                  columnsSortable: true,
                                  columnsResizable: true,
                                  columnsDraggable: true,
                                  columnsHidable: true,
                                  filtersPlaceholder: [
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.Administration.Account_Overview.actionButton1$visibility",
                                        $widgetId: "p.Administration.Account_Overview.actionButton1$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton1",
                                              $widgetId: "p.Administration.Account_Overview.actionButton1",
                                              buttonId: "p.Administration.Account_Overview.actionButton1",
                                              class: "mx-name-actionButton1 spacing-outer-bottom",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-success",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New local user" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: void 0,
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "p3nxnwjamFeukAAPZieDqA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    ),
                                    /* @__PURE__ */ React.createElement(
                                      $ConditionalVisibilityWrapper,
                                      {
                                        key: "p.Administration.Account_Overview.actionButton2$visibility",
                                        $widgetId: "p.Administration.Account_Overview.actionButton2$visibility",
                                        visible: ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                        }),
                                        contents: [
                                          /* @__PURE__ */ React.createElement(
                                            $ActionButton,
                                            {
                                              key: "p.Administration.Account_Overview.actionButton2",
                                              $widgetId: "p.Administration.Account_Overview.actionButton2",
                                              buttonId: "p.Administration.Account_Overview.actionButton2",
                                              class: "mx-name-actionButton2 spacing-outer-left spacing-outer-bottom",
                                              style: void 0,
                                              tabIndex: void 0,
                                              renderType: "button",
                                              role: void 0,
                                              buttonClass: "btn-default",
                                              caption: selectTranslation([
                                                ExpressionProperty({
                                                  "expression": { "expr": { "type": "literal", "value": "New web service user" }, "args": {} }
                                                })
                                              ]),
                                              tooltip: TextProperty({
                                                "value": selectTranslation([
                                                  ""
                                                ])
                                              }),
                                              icon: void 0,
                                              action: ActionProperty({
                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "71N+yc8QtFKyEuDPkzcRoA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                "abortOnServerValidation": true
                                              })
                                            }
                                          )
                                        ]
                                      }
                                    )
                                  ],
                                  filterSectionTitle: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  exportDialogLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                    })
                                  ]),
                                  cancelExportLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                    })
                                  ]),
                                  selectRowLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                    })
                                  ]),
                                  onClickTrigger: "double",
                                  itemSelectionMode: "clear",
                                  loadingType: "spinner",
                                  showNumberOfRows: false,
                                  loadMoreButtonCaption: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                    })
                                  ]),
                                  configurationStorageType: "attribute",
                                  storeFiltersInPersonalization: true,
                                  keepSelection: false,
                                  refreshIndicator: false,
                                  selectAllRowsLabel: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                    })
                                  ]),
                                  selectedCountTemplateSingular: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  selectedCountTemplatePlural: selectTranslation([
                                    ExpressionProperty({
                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                    })
                                  ]),
                                  class: "mx-name-dataGrid21 table-hover",
                                  style: void 0,
                                  tabIndex: void 0
                                }
                              )
                            ]
                          }
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Accounts"
]);
const classes = "layout-atlas layout-atlas-responsive-default page-tabs page-tabs-fullwidth";
const autofocus = "desktopOnly";
const style = {};
const parameters = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { autofocus, classes, content, parameters, style, title };
