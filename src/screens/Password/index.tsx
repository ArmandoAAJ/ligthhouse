import React, { useEffect } from 'react';
import { TextInput } from '@components/Input';
import { TemplateForm } from '@components/TemplateForm';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { RouteProp, useRoute } from '@react-navigation/native';

import { setUser } from '@storage/user';
import { useAuth } from '@context/contextUser';

type Inputs = {
  password: string;
};

type ParamList = {
  password: {
    email: string;
  };
};

export const Password: React.FC = () => {
  const { params } = useRoute<RouteProp<ParamList, 'password'>>();
  const { onUserLoggedIn } = useAuth();
  const {
    setError,
    handleSubmit,
    clearErrors,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {
    if (!params?.email) return;
    setUser(params);
    onUserLoggedIn();
  };

  const { password } = watch();

  const disabled = !!password && !errors?.password;

  useEffect(() => {
    if (password) {
      if (password?.length < 6) {
        setError('password', {
          message: 'Mínimo de 6 caracteres',
        });
      } else {
        clearErrors('password');
      }
    }
  }, [password, setError, clearErrors]);

  return (
    <TemplateForm
      onPress={handleSubmit(onSubmit)}
      disabled={!disabled}
      title="Insira sua senha"
    >
      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            autoComplete="password"
            autoCapitalize="none"
            autoFocus
            messageError={errors?.password?.message}
            placeholder="Senha"
            testID="Senha"
            onChangeText={onChange}
            secureTextEntry
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
            returnKeyType="send"
          />
        )}
      />
    </TemplateForm>
  );
};
