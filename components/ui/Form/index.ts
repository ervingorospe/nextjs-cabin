import FormMain from "./Form";
import Row from "./Row";
import UploadFile from "./UploadFile";
import UploadImages from "./UploadImages";
import FormInput from "./Input";

type FormComponent = typeof FormMain & {
  UploadFile: typeof UploadFile;
  UploadImages: typeof UploadImages;
  Row: typeof Row;
  Input: typeof FormInput;
};

const Form = FormMain as FormComponent;

Form.UploadFile = UploadFile;
Form.UploadImages = UploadImages;
Form.Row = Row;
Form.Input = FormInput;

export default Form;
