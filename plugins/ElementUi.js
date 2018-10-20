import Vue from 'vue';
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/vi';
import {
  Alert,
  Autocomplete,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Carousel,
  CarouselItem,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  Container,
  DatePicker,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Dialog,
  Footer,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Main,
  Menu,
  MenuItem,
  Message,
  Notification,
  Option,
  Pagination,
  Progress,
  Radio,
  RadioGroup,
  Row,
  Select,
  Step,
  Steps,
  Submenu,
  Table,
  TableColumn,
  TabPane,
  Tabs,
  TimePicker,
  Tooltip,
  Upload
} from 'element-ui';

lang.el.datepicker.year = '';
locale.use(lang);

export default () => {
  Vue.use(Alert);
  Vue.use(Autocomplete);
  Vue.use(Breadcrumb);
  Vue.use(BreadcrumbItem);
  Vue.use(Button);
  Vue.use(Carousel);
  Vue.use(CarouselItem);
  Vue.use(Checkbox);
  Vue.use(CheckboxGroup);
  Vue.use(Col);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Container);
  Vue.use(DatePicker);
  Vue.use(Dropdown);
  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Dialog);
  Vue.use(Footer);
  Vue.use(Form);
  Vue.use(FormItem);
  Vue.use(Header);
  Vue.use(Input);
  Vue.use(InputNumber);
  Vue.use(Main);
  Vue.use(Menu);
  Vue.use(MenuItem);
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
  Vue.use(Option);
  Vue.use(Pagination);
  Vue.use(Progress);
  Vue.use(Radio);
  Vue.use(RadioGroup);
  Vue.use(Row);
  Vue.use(Select);
  Vue.use(Step);
  Vue.use(Steps);
  Vue.use(Submenu);
  Vue.use(Table);
  Vue.use(TableColumn);
  Vue.use(TabPane);
  Vue.use(Tabs);
  Vue.use(TimePicker);
  Vue.use(Tooltip);
  Vue.use(Upload);
}
