import React, { useEffect, useMemo } from 'react';
import { TextInput } from '@components/Input';
import { TemplateForm } from '@components/TemplateForm';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { RouterName } from '@routes/index';

type Inputs = {
  email: string;
};

export const Email: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    setError,
    handleSubmit,
    clearErrors,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate(RouterName.password, {
      ...data,
    });
  };

  const { email } = watch();

  const disabled = !!email && !errors?.email;

  useEffect(() => {
    if (email) {
      const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      if (!regex.test(email)) {
        setError('email', {
          message: 'E-mail inválido',
        });
      } else {
        clearErrors('email');
      }
    }
  }, [email, setError, clearErrors]);

  return (
    <TemplateForm
      onPress={handleSubmit(onSubmit)}
      disabled={!disabled}
      title="Insira seu e-mail"
    >
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            autoComplete="email"
            autoCapitalize="none"
            autoFocus
            messageError={errors?.email?.message}
            placeholder="E-mail"
            onChangeText={onChange}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
            returnKeyType="next"
          />
        )}
      />
    </TemplateForm>
  );
};
