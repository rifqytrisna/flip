import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

const formatDate = (value, formatString) => dayjs(value).format(formatString);

export default formatDate;
