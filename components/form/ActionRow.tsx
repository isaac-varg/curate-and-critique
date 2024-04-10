import React from "react";
import { UseFormReturn } from "react-hook-form";
import ActionButton from "../ActionButton";
import Layout from "../layout";

type FormActionRowProps = {
  form: UseFormReturn<any>;
};

const FormActionRow = ({ form }: FormActionRowProps) => {
  const { handleSubmit } = form;
  return (
    <Layout.Row>
      <ActionButton label={"Submit"} buttonType="submit"/>
    </Layout.Row>
  );
};

export default FormActionRow;