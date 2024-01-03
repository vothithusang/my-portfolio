import { Button, Input, InputNumber } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";

interface AboutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
const About = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    resolver: yupResolver(
      yup.object().shape({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup
          .string()
          .email("Invalid email")
          .required("Email is required"),
        phone: yup.number().required("Numeric field is required"),
      })
    ),
  });
  const onSubmit = (data: AboutForm) => console.log(data);

  return (
    <div>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="First name"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Last name"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      {errors.lastName && <p>{errors.lastName.message}</p>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Email"
            type="string"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="email"
      />

      {errors.email && <p>{errors.email.message}</p>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputNumber
            placeholder="Phone"
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
        name="phone"
      />

      {errors.phone && <p>{errors.phone.message}</p>}

      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </div>
  );
};

export default About;
