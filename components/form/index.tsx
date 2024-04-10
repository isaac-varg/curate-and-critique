import React from "react";
import Root from "./Root";
import Text from "./Text";
import ActionRow from "./ActionRow";  
import Switch from "./Switch";
import FileUpload from "./FileUpload";
import Select from "./Select";

const Form = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
);

Form.Root = Root;
Form.Text = Text;
Form.ActionRow = ActionRow
Form.Switch = Switch;
Form.FileUpload = FileUpload;
Form.Select = Select;


export default Form;