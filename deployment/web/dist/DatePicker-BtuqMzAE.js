import { reactExports, newId, reactDomExports, getHTMLElement, jsxRuntimeExports, requiredArgs, toDate, getLocale, ensure, addYears, subYears, addMonths, subMonths, addDays, subDays, toInteger, classNames, DayOfWeek, getFocusableContainer, isMobileDevice, deepEqual } from './index-B8bUhI8E.js';
import { isRightToLeft } from './DsiqzbwR-BPeOjCv1.js';
import { Icon } from './ActionButton-D_YBiLZ6.js';
import { Alert, getAriaLabelProps, getValidationAriaProps } from './FormGroup-LPgVky1u.js';

const FocusContainerContext = reactExports.createContext("");
class FocusContainer extends reactExports.Component {
  constructor() {
    super(...arguments), this.id = newId(), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this);
  }
  onFocus() {
    this.focused || (this.focused = true, this.props.onEnter && this.props.onEnter());
  }
  onBlur(e) {
    this.isDescendant(e.relatedTarget ?? document.activeElement) ? e.stopPropagation() : (this.focused = false, this.onLeave());
  }
  isDescendant(e) {
    const containerNode = reactDomExports.findDOMNode(this);
    let current = e && getHTMLElement(e);
    for (; current; ) {
      if (current === containerNode || current.getAttribute("data-focuscontainer") === this.id)
        return true;
      current = current.parentElement;
    }
    return false;
  }
  onLeave() {
    this.props.onLeave && this.props.onLeave();
  }
  componentWillUnmount() {
    this.focused && this.onLeave();
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainerContext.Provider, { value: this.id, children: reactExports.cloneElement(reactExports.Children.only(this.props.children), { onFocus: this.onFocusHandler, onBlur: this.onBlurHandler }) });
  }
}
const createFocusAwarePortal = (children, container, key) => reactDomExports.createPortal(jsxRuntimeExports.jsx(FocusContainerContext.Consumer, { children: (containerId) => reactExports.cloneElement(reactExports.Children.only(children), { ref: (e) => {
  const node = reactDomExports.findDOMNode(e);
  null !== node && containerId && node.setAttribute("data-focuscontainer", containerId);
} }) }), container, key);

function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate), year = date.getFullYear(), monthIndex = date.getMonth(), lastDayOfMonth = /* @__PURE__ */ new Date(0);
  return lastDayOfMonth.setFullYear(year, monthIndex + 1, 0), lastDayOfMonth.setHours(0, 0, 0, 0), lastDayOfMonth.getDate();
}
var DateField, DateFieldFormat, DateTimeFormatType, DateTimeFormatLength, CalendarSystem;
function formatMonth(value, format = DateFieldFormat.Long) {
  const { dates } = getLocale(), index = value - 1;
  switch (format) {
    case DateFieldFormat.Long:
      return ensure(dates.months[index]);
    case DateFieldFormat.Narrow:
    case DateFieldFormat.Short:
      return ensure(dates.shortMonths[index]);
  }
}
function formatDayOfWeek(value, format = DateFieldFormat.Long) {
  const { dates } = getLocale();
  switch (format) {
    case DateFieldFormat.Long:
      return ensure(dates.weekdays[value]);
    case DateFieldFormat.Narrow:
    case DateFieldFormat.Short:
      return ensure(dates.shortWeekdays[value]);
  }
}
!function(DateField2) {
  DateField2.Month = "months", DateField2.DayOfWeek = "days";
}(DateField || (DateField = {})), function(DateFieldFormat2) {
  DateFieldFormat2.Long = "wide", DateFieldFormat2.Short = "abbr", DateFieldFormat2.Narrow = "narrow";
}(DateFieldFormat || (DateFieldFormat = {})), function(DateTimeFormatType2) {
  DateTimeFormatType2.Date = "date", DateTimeFormatType2.Time = "time", DateTimeFormatType2.DateTime = "datetime";
}(DateTimeFormatType || (DateTimeFormatType = {})), function(DateTimeFormatLength2) {
  DateTimeFormatLength2.Short = "short", DateTimeFormatLength2.Medium = "medium", DateTimeFormatLength2.Long = "long", DateTimeFormatLength2.Full = "full";
}(DateTimeFormatLength || (DateTimeFormatLength = {})), function(CalendarSystem2) {
  CalendarSystem2.Gregorian = "gregorian", CalendarSystem2.ThaiBuddhist = "thai-buddhist";
}(CalendarSystem || (CalendarSystem = {}));
class LocalDate {
  constructor(year, monthOfYear, dayOfMonth, chronology) {
    this.year = year, this.monthOfYear = monthOfYear, this.dayOfMonth = dayOfMonth, this.chronology = chronology;
  }
  isSameDate(date) {
    return this.chronology === date.chronology && this.getYear() === date.getYear() && this.getMonthOfYear() === date.getMonthOfYear() && this.getDayOfMonth() === date.getDayOfMonth();
  }
  getChronology() {
    return this.chronology;
  }
  getYear() {
    return this.year;
  }
  getMonthOfYear() {
    return this.monthOfYear;
  }
  getDayOfMonth() {
    return this.dayOfMonth;
  }
  getDayOfWeek() {
    return this.chronology.getDayOfWeek(this);
  }
  lengthOfYearInMonths() {
    return this.chronology.lengthOfYearInMonths(this.year);
  }
  plusYears(years) {
    return this.chronology.plusYears(this, years);
  }
  plusMonths(months) {
    return this.chronology.plusMonths(this, months);
  }
  plusDays(days) {
    return this.chronology.plusDays(this, days);
  }
  minusYears(years) {
    return this.chronology.minusYears(this, years);
  }
  minusMonths(months) {
    return this.chronology.minusMonths(this, months);
  }
  minusDays(days) {
    return this.chronology.minusDays(this, days);
  }
  withDayOfMonth(dayOfMonth) {
    return this.chronology.withDayOfMonth(this, dayOfMonth);
  }
  withMonthOfYear(monthOfYear) {
    return this.chronology.withMonthOfYear(this, monthOfYear);
  }
  withYear(year) {
    return this.chronology.withYear(this, year);
  }
  toJsDate() {
    return this.chronology.toJsDate(this);
  }
  toString() {
    const month = zeroPadLeft$1(this.monthOfYear, 2), day = zeroPadLeft$1(this.dayOfMonth, 2), dayOfWeek = weekDays[this.getDayOfWeek()], calendarSystem = this.getChronology().getCalendarSystem();
    return `${this.year}-${month}-${day} ${dayOfWeek} (${calendarSystem})`;
  }
}
function zeroPadLeft$1(n, len) {
  const num = n.toString();
  return new Array(len - num.length + 1).join("0") + num;
}
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
class LocalTime {
  constructor(hour = 0, minute = 0, second = 0, millisecond = 0) {
    this.hour = hour, this.minute = minute, this.second = second, this.millisecond = millisecond;
  }
  getHour() {
    return this.hour;
  }
  getMinute() {
    return this.minute;
  }
  getSecond() {
    return this.second;
  }
  getMillisecond() {
    return this.millisecond;
  }
  isSameTime(time) {
    return this.hour === time.hour && this.minute === time.minute && this.second === time.second && this.millisecond === time.millisecond;
  }
  toString() {
    return zeroPadLeft(this.hour, 2) + ":" + zeroPadLeft(this.minute, 2) + ":" + zeroPadLeft(this.second, 2) + "." + zeroPadLeft(this.millisecond, 3);
  }
}
function zeroPadLeft(n, len) {
  const num = n.toString();
  return new Array(len - num.length + 1).join("0") + num;
}
class Chronology {
  constructor(calendarSystem) {
    this.calendarSystem = calendarSystem;
  }
  getCalendarSystem() {
    return this.calendarSystem;
  }
  convertInput(date) {
    if (date.getChronology() !== this)
      throw new Error(`Incompatible chronology: LocalDate should be ${this.getCalendarSystem()} but was ${date.getChronology().getCalendarSystem()}`);
    return { localDate: date instanceof LocalDate ? date : date.getDate(), localTime: date instanceof LocalDate ? new LocalTime() : date.getTime() };
  }
  static getInstance() {
    return this.instance;
  }
}
class LocalDateTime {
  constructor(date, time = new LocalTime()) {
    this.date = date, this.time = time;
  }
  getDate() {
    return this.date;
  }
  getTime() {
    return this.time;
  }
  withDate(newDate) {
    return new LocalDateTime(newDate, this.time);
  }
  withTime(newTime) {
    return new LocalDateTime(this.date, newTime);
  }
  toJsDate() {
    return this.date.getChronology().toJsDate(this);
  }
  isSameDateTime(dateTime) {
    return this.date.isSameDate(dateTime.date) && this.time.isSameTime(dateTime.time);
  }
  getChronology() {
    return this.date.getChronology();
  }
  toString() {
    return this.date.toString() + " " + this.time.toString();
  }
}
class GregorianChronology extends Chronology {
  constructor(yearOffset = 0, calendarSystem = CalendarSystem.Gregorian) {
    super(calendarSystem), this.yearOffset = yearOffset;
  }
  getDayOfWeek(date) {
    return function(dirtyDate) {
      return requiredArgs(1, arguments), toDate(dirtyDate).getDay();
    }(this.toJsDate(date));
  }
  lengthOfMonthInDays(year, month) {
    return getDaysInMonth(new Date(year, month - 1, 1));
  }
  lengthOfYearInMonths(_year) {
    return 12;
  }
  plusYears(date, years) {
    return convert(this.fromJsDate(addYears(this.toJsDate(date), years)), date);
  }
  minusYears(date, years) {
    return convert(this.fromJsDate(subYears(this.toJsDate(date), years)), date);
  }
  plusMonths(date, months) {
    return convert(this.fromJsDate(addMonths(this.toJsDate(date), months)), date);
  }
  minusMonths(date, months) {
    return convert(this.fromJsDate(subMonths(this.toJsDate(date), months)), date);
  }
  plusDays(date, days) {
    return convert(this.fromJsDate(addDays(this.toJsDate(date), days)), date);
  }
  minusDays(date, days) {
    return convert(this.fromJsDate(subDays(this.toJsDate(date), days)), date);
  }
  withDayOfMonth(date, dayOfMonth) {
    return convert(this.fromJsDate(function(dirtyDate, dirtyDayOfMonth) {
      requiredArgs(2, arguments);
      var date2 = toDate(dirtyDate), dayOfMonth2 = toInteger(dirtyDayOfMonth);
      return date2.setDate(dayOfMonth2), date2;
    }(this.toJsDate(date), dayOfMonth)), date);
  }
  withMonthOfYear(date, monthOfYear) {
    return convert(this.fromJsDate(function(dirtyDate, dirtyMonth) {
      requiredArgs(2, arguments);
      var date2 = toDate(dirtyDate), month = toInteger(dirtyMonth), year = date2.getFullYear(), day = date2.getDate(), dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
      dateWithDesiredMonth.setFullYear(year, month, 15), dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
      return date2.setMonth(month, Math.min(day, daysInMonth)), date2;
    }(this.toJsDate(date), monthOfYear - 1)), date);
  }
  withYear(date, year) {
    return convert(this.fromJsDate(function(dirtyDate, dirtyYear) {
      requiredArgs(2, arguments);
      var date2 = toDate(dirtyDate), year2 = toInteger(dirtyYear);
      return isNaN(date2.getTime()) ? /* @__PURE__ */ new Date(NaN) : (date2.setFullYear(year2), date2);
    }(this.toJsDate(date), year)), date);
  }
  fromJsDate(date) {
    const localDate = new LocalDate(date.getFullYear() + this.yearOffset, date.getMonth() + 1, date.getDate(), this), localTime = new LocalTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return new LocalDateTime(localDate, localTime);
  }
  toJsDate(date) {
    const { localDate, localTime } = this.convertInput(date);
    return new Date(localDate.getYear() - this.yearOffset, localDate.getMonthOfYear() - 1, localDate.getDayOfMonth(), localTime.getHour(), localTime.getMinute(), localTime.getSecond(), localTime.getMillisecond());
  }
}
function convert(result, inputType) {
  return inputType instanceof LocalDate ? result.getDate() : result;
}
GregorianChronology.instance = new GregorianChronology();
class ThaiBuddhistChronology extends GregorianChronology {
}
function getChronology() {
  switch (/th$/i.test(getLocale().languageTag) ? CalendarSystem.ThaiBuddhist : CalendarSystem.Gregorian) {
    case CalendarSystem.ThaiBuddhist:
      return ThaiBuddhistChronology.getInstance();
    case CalendarSystem.Gregorian:
      return GregorianChronology.getInstance();
  }
}
ThaiBuddhistChronology.instance = new ThaiBuddhistChronology(543, CalendarSystem.ThaiBuddhist);
class AbsolutePositioned extends reactExports.PureComponent {
  render() {
    const child = reactExports.Children.only(this.props.children), positionProps = Object.keys(this.props).filter((key) => ["top", "right", "bottom", "left"].includes(key)).map((key) => ({ [key]: `${this.props[key]}px` })), style = Object.assign({ ...child.props.style, position: this.props.position ?? "absolute" }, ...positionProps);
    return reactExports.cloneElement(child, { style });
  }
}
var RelativeMonth;
!function(RelativeMonth2) {
  RelativeMonth2.Current = "current", RelativeMonth2.Previous = "previous", RelativeMonth2.Next = "next";
}(RelativeMonth || (RelativeMonth = {}));
class Day extends reactExports.Component {
  constructor() {
    super(...arguments), this.onClickHandler = this.onClick.bind(this);
  }
  onClick() {
    this.props.onSelect(this.props.date);
  }
  componentDidMount() {
    this.focusIfHighlighted();
  }
  componentDidUpdate() {
    this.focusIfHighlighted();
  }
  focusIfHighlighted() {
    this.props.isCalendarFocused && this.props.isHighlighted && this.focus();
  }
  focus() {
    this.ref && this.ref.focus();
  }
  render() {
    return jsxRuntimeExports.jsx("td", { className: classNames({ "mx-calendar-day-month-current": this.props.relativeMonth === RelativeMonth.Current, "mx-calendar-day-month-previous": this.props.relativeMonth === RelativeMonth.Previous, "mx-calendar-day-month-next": this.props.relativeMonth === RelativeMonth.Next, "mx-calendar-day-selected": this.props.isSelected, "mx-calendar-day-active": this.props.isHighlighted, "mx-calendar-day-today": this.props.isToday }), role: "gridcell", onClick: this.onClickHandler, tabIndex: this.props.isHighlighted ? 0 : -1, "aria-label": this.props.dayLabel, "aria-selected": this.props.isSelected, ref: (e) => this.ref = e ?? void 0, children: this.props.date.getDayOfMonth() });
  }
}
const Week = (props) => jsxRuntimeExports.jsx("tr", { role: "row", children: props.days.map((dayInfo) => reactExports.createElement(Day, { ...dayInfo, isSelected: !!props.selectedDate && dayInfo.date.isSameDate(props.selectedDate), isHighlighted: dayInfo.date.isSameDate(props.highlightedDate), isCalendarFocused: props.isCalendarFocused, isToday: dayInfo.date.isSameDate(props.today), dayLabel: props.dayFormatter(dayInfo.date), onSelect: props.onSelect, key: dayInfo.date.getDayOfMonth() })) }), WeekDay = (props) => jsxRuntimeExports.jsx("th", { role: "columnheader", scope: "col", title: formatDayOfWeek(props.day), children: formatDayOfWeek(props.day, DateFieldFormat.Narrow) }), allDays = [DayOfWeek.Sunday, DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday];
function WeekDaysRow(props) {
  const days = allDays.slice(props.firstDayOfWeek).concat(allDays.slice(0, props.firstDayOfWeek));
  return jsxRuntimeExports.jsx("tr", { role: "row", children: days.map((day) => jsxRuntimeExports.jsx(WeekDay, { day }, day)) });
}
class Month extends reactExports.Component {
  constructor() {
    super(...arguments), this.prepareWeeks = () => function(currentDate, firstDayOfWeek) {
      const currentMonth = currentDate.getMonthOfYear(), firstDayOfCurrentMonth = currentDate.withDayOfMonth(1), dayShift = (firstDayOfCurrentMonth.getDayOfWeek() - firstDayOfWeek + 7) % 7, firstCalendarMatrixDay = firstDayOfCurrentMonth.minusDays(dayShift);
      let day = 0;
      const daysByWeeks = [];
      for (let w = 0; w < 6; w++) {
        const week = [];
        for (let dow = 0; dow < 7; dow++, day++) {
          const date = firstCalendarMatrixDay.plusDays(day), relativeMonth = getRelativeMonth(day, dayShift, currentMonth === date.getMonthOfYear());
          week.push({ date, relativeMonth });
        }
        daysByWeeks.push(week);
      }
      return daysByWeeks;
    }(this.props.highlightedDate, this.props.firstDayOfWeek);
  }
  renderHead() {
    return jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsx(WeekDaysRow, { firstDayOfWeek: this.props.firstDayOfWeek }) });
  }
  renderBody() {
    const today = getChronology().fromJsDate(new Date(Date.now())).getDate();
    return jsxRuntimeExports.jsx("tbody", { children: this.prepareWeeks().map((week, index) => jsxRuntimeExports.jsx(Week, { days: week, selectedDate: this.props.selectedDate, highlightedDate: this.props.highlightedDate, isCalendarFocused: this.props.isCalendarFocused, dayFormatter: this.props.dayFormatter, onSelect: this.props.onDateSelect, today }, index)) });
  }
  render() {
    return jsxRuntimeExports.jsxs("table", { role: "grid", summary: formatMonth(this.props.highlightedDate.getMonthOfYear()), children: [this.renderHead(), this.renderBody()] });
  }
}
function getRelativeMonth(day, dayShift, isCurrentMonth) {
  return day < dayShift ? RelativeMonth.Previous : isCurrentMonth ? RelativeMonth.Current : RelativeMonth.Next;
}
class MonthDropDown extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = { showDropDown: false }, this.id = newId("MonthDropDown"), this.onClickHandler = this.onClick.bind(this), this.onLeaveHandler = this.onLeave.bind(this), this.onSelectHandler = this.onSelect.bind(this);
  }
  onClick() {
    this.setState((prev) => ({ showDropDown: !prev.showDropDown }));
  }
  onLeave() {
    this.setState({ showDropDown: false });
  }
  onSelect(date) {
    this.props.onChange(date);
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainer, { onLeave: this.onLeaveHandler, children: jsxRuntimeExports.jsxs("div", { className: "mx-calendar-month-dropdown", onClick: this.onClickHandler, tabIndex: -1, role: "button", id: this.id, "aria-haspopup": "true", "aria-expanded": this.state.showDropDown, "aria-owns": `${this.id}_mdd`, children: [jsxRuntimeExports.jsx(MonthLabel, { highlightedDate: this.props.highlightedDate }), jsxRuntimeExports.jsx(Icon, { icon: { type: "icon", iconClass: "mx-icon-filled mx-icon-chevron-down" } }), this.renderOptions()] }) });
  }
  renderOptions() {
    return this.state.showDropDown && jsxRuntimeExports.jsx(MonthOptions, { highlightedDate: this.props.highlightedDate, onSelect: this.onSelectHandler, parentId: this.id });
  }
}
class MonthLabel extends reactExports.PureComponent {
  render() {
    return jsxRuntimeExports.jsxs("div", { className: "mx-calendar-month-current", children: [jsxRuntimeExports.jsx("div", { className: "mx-calendar-month-spacer", "aria-hidden": "true", children: monthsRange(this.props.highlightedDate).map((month) => jsxRuntimeExports.jsx("div", { children: formatMonth(month) }, month)) }), jsxRuntimeExports.jsx("div", { className: "mx-calendar-month-label", children: formatMonth(this.props.highlightedDate.getMonthOfYear()) })] });
  }
}
class MonthOptions extends reactExports.PureComponent {
  render() {
    return jsxRuntimeExports.jsx("div", { className: "mx-calendar-month-dropdown-options", id: `${this.props.parentId}_mdd`, children: monthsRange(this.props.highlightedDate).map((month) => jsxRuntimeExports.jsx(MonthOption, { month, onSelect: () => this.props.onSelect(this.props.highlightedDate.withMonthOfYear(month)) }, month)) });
  }
}
const MonthOption = ({ month, onSelect }) => jsxRuntimeExports.jsx("div", { onClick: onSelect, children: formatMonth(month) }), monthsRange = (date) => Array.from(Array(date.lengthOfYearInMonths()).keys()).map((i) => i + 1), MonthHeader = (props) => jsxRuntimeExports.jsxs("div", { className: "mx-calendar-month-header", "aria-hidden": "true", children: [jsxRuntimeExports.jsx("button", { className: "mx-calendar-month-previous", tabIndex: -1, onClick: () => props.onChange(props.highlightedDate.minusMonths(1)), children: jsxRuntimeExports.jsx(Icon, { icon: { type: "icon", iconClass: "mx-icon-filled mx-icon-substract" } }) }), jsxRuntimeExports.jsx(MonthDropDown, { highlightedDate: props.highlightedDate, onChange: props.onChange }), jsxRuntimeExports.jsx("button", { className: "mx-calendar-month-next", tabIndex: -1, onClick: () => props.onChange(props.highlightedDate.plusMonths(1)), children: jsxRuntimeExports.jsx(Icon, { icon: { type: "icon", iconClass: "mx-icon-filled mx-icon-add" } }) })] }), YearSwitcher = (props) => {
  const prevYear = props.highlightedDate.minusYears(1), nextYear = props.highlightedDate.plusYears(1);
  return jsxRuntimeExports.jsxs("div", { className: "mx-calendar-year-switcher", role: "presentation", children: [jsxRuntimeExports.jsx(YearButton, { type: "previous", year: prevYear.getYear(), onSelect: () => props.onChange(prevYear) }), jsxRuntimeExports.jsx(YearButton, { type: "selected", year: props.highlightedDate.getYear() }), jsxRuntimeExports.jsx(YearButton, { type: "next", year: nextYear.getYear(), onSelect: () => props.onChange(nextYear) })] });
}, YearButton = ({ type, onSelect, year }) => jsxRuntimeExports.jsx("span", { className: `mx-calendar-year-${type}`, tabIndex: -1, onClick: onSelect, children: year });
class Calendar extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = Calendar.getStateFromProps(this.props, { isFocused: false, highlightedDate: this.props.defaultDate }), this.onDateSelectHandler = this.onDateSelect.bind(this), this.onHighlightedDateChangeHandler = this.onHighlightedDateChange.bind(this), this.onKeyDownHandler = this.onKeyDown.bind(this), this.onKeyUpHandler = this.onKeyUp.bind(this), this.onEnterHandler = this.onEnter.bind(this), this.onLeaveHandler = this.onLeave.bind(this), this.onMouseDownHandler = this.onMouseDown.bind(this);
  }
  componentDidMount() {
    this.focus();
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    newProps.selectedDate && !this.props.selectedDate?.isSameDate(newProps.selectedDate) && this.setState((curState) => Calendar.getStateFromProps(newProps, curState));
  }
  onDateSelect(date) {
    this.props.onChange(date);
  }
  onHighlightedDateChange(highlightedDate) {
    this.setHighlightedDate(highlightedDate);
  }
  setHighlightedDate(highlightedDate) {
    this.setState({ highlightedDate });
  }
  onKeyDown(e) {
    const current = this.state.highlightedDate, rightToLeft = this.props.rightToLeft;
    switch (e.key) {
      case "ArrowUp":
        this.setHighlightedDate(current.minusDays(7));
        break;
      case "ArrowDown":
        this.setHighlightedDate(current.plusDays(7));
        break;
      case "ArrowLeft":
        this.setHighlightedDate(rightToLeft ? current.plusDays(1) : current.minusDays(1));
        break;
      case "ArrowRight":
        this.setHighlightedDate(rightToLeft ? current.minusDays(1) : current.plusDays(1));
        break;
      case "PageUp":
        this.setHighlightedDate(e.ctrlKey || e.altKey ? current.minusYears(1) : current.minusMonths(1));
        break;
      case "PageDown":
        this.setHighlightedDate(e.ctrlKey || e.altKey ? current.plusYears(1) : current.plusMonths(1));
        break;
      case "Home":
        this.setHighlightedDate(current.withDayOfMonth(1));
        break;
      case "End":
        this.setHighlightedDate(current.withDayOfMonth(1).plusMonths(1).minusDays(1));
        break;
      default:
        return;
    }
    e.preventDefault(), e.stopPropagation();
  }
  onKeyUp(e) {
    const current = this.state.highlightedDate;
    switch (e.key) {
      case " ":
      case "Enter":
        this.onDateSelect(current);
        break;
      default:
        return;
    }
    e.preventDefault(), e.stopPropagation();
  }
  focus() {
    this.setState({ isFocused: true });
  }
  onEnter() {
    this.setState({ isFocused: true });
  }
  onLeave() {
    this.setState({ isFocused: false });
  }
  onMouseDown(e) {
    const focusableContainer = getFocusableContainer(e.target);
    focusableContainer ? (e.preventDefault(), focusableContainer.focus()) : (e.preventDefault(), this.focus());
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainer, { onEnter: this.onEnterHandler, onLeave: this.onLeaveHandler, children: jsxRuntimeExports.jsxs("div", { className: "mx-calendar", role: "presentation", style: this.props.style, onKeyDown: this.onKeyDownHandler, onKeyUp: this.onKeyUpHandler, onMouseDown: this.onMouseDownHandler, children: [jsxRuntimeExports.jsx(MonthHeader, { highlightedDate: this.state.highlightedDate, onChange: this.onHighlightedDateChangeHandler }), jsxRuntimeExports.jsx(Month, { selectedDate: this.props.selectedDate, highlightedDate: this.state.highlightedDate, isCalendarFocused: this.state.isFocused, firstDayOfWeek: this.props.firstDayOfWeek, dayFormatter: this.props.dayFormatter, onDateSelect: this.onDateSelectHandler }), jsxRuntimeExports.jsx(YearSwitcher, { highlightedDate: this.state.highlightedDate, onChange: this.onHighlightedDateChangeHandler })] }) });
  }
  static getStateFromProps(props, state) {
    return { highlightedDate: (state.isFocused ? state.highlightedDate : void 0) ?? props.selectedDate ?? props.defaultDate, isFocused: state.isFocused };
  }
}
class AnimationFrameHandler extends reactExports.Component {
  constructor() {
    super(...arguments), this.onAnimationFrameHandler = this.onAnimationFrame.bind(this);
  }
  componentDidMount() {
    this.requestFrame();
  }
  requestFrame() {
    this.requestId = window.requestAnimationFrame(this.onAnimationFrameHandler);
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }
  onAnimationFrame() {
    this.props.callback(), this.requestFrame();
  }
  render() {
    return null;
  }
}
class PositionObserver extends reactExports.Component {
  constructor() {
    super(...arguments), this.onAnimationFrameHandler = this.onAnimationFrame.bind(this);
  }
  onAnimationFrame() {
    this.element ?? (this.element = reactDomExports.findDOMNode(this) ?? void 0);
    const position = this.element?.getBoundingClientRect();
    PositionObserver.shouldUpdatePosition(position, this.position) && (this.position = position, this.props.callback(position));
  }
  componentWillUnmount() {
    delete this.element;
  }
  render() {
    const child = reactExports.cloneElement(reactExports.Children.only(this.props.children), { key: 1 });
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [child, this.props.active ? jsxRuntimeExports.jsx(AnimationFrameHandler, { callback: this.onAnimationFrameHandler }, 2) : null] });
  }
  static shouldUpdatePosition(a, b) {
    return !a || !b || a.height !== b.height || a.width !== b.width || a.bottom !== b.bottom || a.top !== b.top || a.left !== b.left || a.right !== b.right;
  }
}
class DatePicker extends reactExports.Component {
  constructor() {
    var props, calendarSystem;
    super(...arguments), this.chronology = getChronology(), this.native = (props = this.props, calendarSystem = this.chronology.getCalendarSystem(), isMobileDevice() && function(type) {
      const input = document.createElement("input");
      return input.type = type, input.value = ":)", input.type === type && ":)" !== input.value;
    }(getNativeInputType(props.mode)) && calendarSystem !== CalendarSystem.ThaiBuddhist), this.defaultFormatter = this.props.inputValue.formatter, this.formatter = this.createFormatter(this.defaultFormatter), this.dayFormatter = this.createDayFormatter(this.defaultFormatter), this.defaultPlaceholder = this.defaultFormatter.getFormatPlaceholder() ?? "", this.state = { showCalendar: false }, this.onChangeHandler = this.onChange.bind(this), this.onKeyUpHandler = this.onKeyUp.bind(this), this.onInputKeyUpHandler = this.onInputKeyUp.bind(this), this.onButtonClickHandler = this.onButtonClick.bind(this), this.onInputPositionHandler = this.onInputPosition.bind(this), this.onCalendarPositionHandler = this.onCalendarPosition.bind(this), this.onSelectDateHandler = this.onSelectDate.bind(this), this.onEnterHandler = this.onEnter.bind(this), this.onLeaveHandler = this.onLeave.bind(this), this.today = this.chronology.fromJsDate(/* @__PURE__ */ new Date()).getDate();
  }
  createFormatter(defaultFormatter) {
    return this.native ? defaultFormatter.withConfig({ type: "custom", pattern: getNativeFormat(this.props.mode) }) : defaultFormatter;
  }
  createDayFormatter(defaultFormatter) {
    const dayFormatter = defaultFormatter.withConfig({ type: "date" });
    return (day) => dayFormatter.format(day.toJsDate());
  }
  componentDidUpdate(prevProps, prevState) {
    if (setTimeout(() => {
      this.inputRef && (this.inputRef.defaultValue = "");
    }, 0), !prevState.editedValue)
      return;
    const { value: newValue, displayValue: newDisplayValue } = this.props.inputValue, { value: oldValue, displayValue: oldDisplayValue } = prevProps.inputValue;
    !this.props.inputValue.readOnly && deepEqual(newValue, oldValue) && newDisplayValue === oldDisplayValue || this.setState({ editedValue: void 0 });
  }
  toLocalDateTime(date) {
    return date && this.chronology.fromJsDate(date);
  }
  formatValue(value) {
    const date = value instanceof LocalDateTime ? value.toJsDate() : value;
    return this.formatter.format(date);
  }
  onChange(e) {
    this.setState({ editedValue: this.parseValue(e.target.value) }, () => {
      this.native && this.submitValue();
    });
  }
  parseValue(displayValue) {
    displayValue = this.native && displayValue.length > 16 ? displayValue.substring(0, 16) : displayValue;
    const fallbackDate = this.props.inputValue.value, parseResult = this.formatter.parse(displayValue, fallbackDate);
    return { displayValue, internalValue: parseResult.valid ? { valid: true, value: this.toLocalDateTime(parseResult.value) } : parseResult };
  }
  combineDateTime(oldValue, newValue) {
    if (!oldValue || !newValue)
      return newValue;
    switch (this.props.mode) {
      case "date":
        return newValue.withTime(oldValue.getTime());
      case "time":
        return newValue.withDate(oldValue.getDate());
      case "datetime":
        return newValue;
    }
    throw new Error(`Unknown date picker mode '${this.props.mode}`);
  }
  onEnter() {
    this.dispatchAction("onEnter");
  }
  onLeave() {
    this.submitValue(), this.closeCalendar(), this.dispatchAction("onLeave");
  }
  submitValue() {
    const editedValue = this.state.editedValue;
    if (editedValue) {
      if (editedValue.internalValue.valid) {
        const oldValue = this.toLocalDateTime(this.props.inputValue.value), newValue = this.combineDateTime(oldValue, editedValue.internalValue.value);
        b = oldValue, ((a = newValue) && b ? a.isSameDateTime(b) : a === b) && this.parseValue(this.props.inputValue.displayValue).internalValue.valid || this.props.inputValue.setValue(newValue ? newValue.toJsDate() : void 0);
      } else
        editedValue.displayValue !== this.props.inputValue.displayValue && this.props.inputValue.setTextValue(editedValue.displayValue);
      var a, b;
      this.setState({ editedValue: void 0 });
    }
  }
  onKeyUp(e) {
    "Escape" === e.key && this.closeCalendarAndFocusInput();
  }
  onInputKeyUp(e) {
    "ArrowDown" === e.key && this.supportsCalendar() ? this.openCalendar() : "Enter" === e.key && (this.submitValue(), this.closeCalendar()), this.props.onInputKeyUp && this.props.onInputKeyUp(e);
  }
  supportsCalendar() {
    return !this.native && this.props.showCalendarButton;
  }
  onButtonClick() {
    this.state.showCalendar ? this.closeCalendarAndFocusInput() : this.openCalendar();
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
  onInputPosition(position) {
    this.setState({ inputPosition: position });
  }
  onCalendarPosition(position) {
    this.setState({ calendarSize: position ? { width: position.width, height: position.height } : void 0 });
  }
  onSelectDate(date) {
    let dateTime = new LocalDateTime(date);
    if (void 0 !== this.state.editedValue) {
      const previousValue = this.state.editedValue.internalValue;
      previousValue.valid && void 0 !== previousValue.value && (dateTime = new LocalDateTime(date, previousValue.value.getTime()));
    } else {
      const previousValue = this.toLocalDateTime(this.props.inputValue.value);
      dateTime = new LocalDateTime(date, previousValue?.getTime());
    }
    const editedValue = { displayValue: this.formatValue(dateTime), internalValue: { valid: true, value: dateTime } };
    this.setState({ editedValue }, () => this.submitValue()), this.closeCalendarAndFocusInput();
  }
  openCalendar() {
    this.setState({ showCalendar: true }, () => this.calendarRef?.focus());
  }
  closeCalendarAndFocusInput() {
    this.closeCalendar(), this.inputRef && this.inputRef.focus();
  }
  closeCalendar() {
    this.setState({ showCalendar: false, calendarSize: void 0 });
  }
  getDisplayValue() {
    return void 0 !== this.state.editedValue ? this.state.editedValue.displayValue : this.native ? this.formatValue(this.props.inputValue.value) : this.props.inputValue.displayValue;
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: ["control" !== this.props.readOnlyStyle && this.props.inputValue.readOnly ? this.renderAsText() : this.renderAsInput(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(FocusContainer, { onEnter: this.onEnterHandler, onLeave: this.onLeaveHandler, children: jsxRuntimeExports.jsxs("div", { className: "mx-compound-control", onKeyUp: this.onKeyUpHandler, children: [jsxRuntimeExports.jsx(PositionObserver, { active: this.state.showCalendar, callback: this.onInputPositionHandler, children: jsxRuntimeExports.jsx("input", { className: classNames("form-control", { "has-value": this.native && !!this.getDisplayValue() }), type: this.native ? getNativeInputType(this.props.mode) : "text", value: this.getDisplayValue(), placeholder: this.props.inputValue.readOnly ? void 0 : this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : this.native ? "\xA0" : this.defaultPlaceholder, id: this.props.id, tabIndex: this.props.tabIndex, disabled: this.props.inputValue.readOnly, onChange: this.onChangeHandler, onKeyUp: this.onInputKeyUpHandler, ref: (e) => this.inputRef = e ?? void 0, "data-handles-escape": this.state.showCalendar || void 0, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired }) }), this.renderButton(), this.renderCalendar()] }) });
  }
  renderButton() {
    const value = this.props.inputValue;
    return "available" === value.status && this.supportsCalendar() ? jsxRuntimeExports.jsx("button", { type: "button", className: "btn mx-button", "aria-label": this.props.buttonLabel.value, tabIndex: -1, disabled: value.readOnly, onClick: this.onButtonClickHandler, "data-handles-escape": this.state.showCalendar || void 0, children: jsxRuntimeExports.jsx("span", { className: "mx-icon-filled mx-icon-calendar" }) }) : null;
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.props.inputValue.displayValue || "\xA0" });
  }
  renderCalendar() {
    if (!this.state.showCalendar || !this.state.inputPosition)
      return null;
    let horizontal = {}, vertical = {};
    if (this.state.calendarSize) {
      const { clientWidth, clientHeight } = document.body, input = this.state.inputPosition, height = this.state.calendarSize.height;
      horizontal = isRightToLeft() ? { right: clientWidth - input.right } : { left: input.left }, vertical = clientHeight >= input.bottom + height ? { top: input.bottom } : input.top >= height ? { bottom: clientHeight - input.top } : { bottom: 0 };
    }
    const currentValue = this.state.editedValue ? this.state.editedValue.internalValue.valid ? this.state.editedValue.internalValue.value : void 0 : this.toLocalDateTime(this.props.inputValue.value), selectedDate = void 0 !== currentValue ? currentValue.getDate() : void 0, firstDayOfWeek = getLocale().firstDayOfWeek;
    return createFocusAwarePortal(jsxRuntimeExports.jsx(PositionObserver, { active: true, callback: this.onCalendarPositionHandler, children: jsxRuntimeExports.jsx(AbsolutePositioned, { position: "fixed", ...horizontal, ...vertical, children: jsxRuntimeExports.jsx(Calendar, { selectedDate, defaultDate: this.today, onChange: this.onSelectDateHandler, firstDayOfWeek, rightToLeft: isRightToLeft(), dayFormatter: this.dayFormatter, ref: (e) => this.calendarRef = e ?? void 0, style: this.state.calendarSize ? {} : { opacity: 0 } }) }) }), document.body);
  }
}
function getNativeInputType(mode) {
  switch (mode) {
    case "date":
      return "date";
    case "time":
      return "time";
    case "datetime":
      return "datetime-local";
  }
}
function getNativeFormat(mode) {
  switch (mode) {
    case "date":
      return "yyyy-MM-dd";
    case "time":
      return "HH:mm";
    case "datetime":
      return "yyyy-MM-dd'T'HH:mm";
  }
}

export { DatePicker, FocusContainer };
