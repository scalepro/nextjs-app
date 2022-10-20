import { useForm } from 'react-hook-form';
import { classNames } from '@/services/functions';
import { Button } from 'flowbite-react';
import {
  defaultInput,
  errorInput,
  defaultLabel,
  dividedCard,
  cardTitle,
  cardSubtitle,
  errorFormMessage,
} from '@/styles/StyledElements';

function confirmPass(confirm_pass, pass){
  return confirm_pass == pass? true : false;
}

function validatePass(pass){
  if(pass.length >= 8){
    if(!/^[0-9]+$/.test(pass)){
      if(!/^[a-zA-Z]+$/.test(pass)) return true;
      else return 'A senha não pode conter somente letras';
    }else return 'A senha não pode conter somente números';
  }else return 'A senha precisa ter ao menos 8 caracteres';
}

export default function ChangePassword(){
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return(
    <section className="mt-10" aria-labelledby="billing-data">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={dividedCard}>
          <div className="px-4 py-5 sm:p-6">
            <div>
              <h2 id="billing-data" className={cardTitle}>
                Alterar senha
              </h2>
              <p className={cardSubtitle}>
                Altere a senha usada para efetuar o login em sua conta.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-4 gap-6">
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="current_pass" className={defaultLabel}>
                  Senha atual
                </label>
                <input
                  type="password"
                  id="current_pass"
                  className={classNames(
                    errors.current_pass && !errors.current_pass.message
                      ? errorInput
                      : defaultInput
                  )}
                  {...register('current_pass', { required: true })}
                />
                {errors.current_pass && errors.current_pass.type === 'required' && (
                  <p className={errorFormMessage}>Este campo é obrigatório</p>
                )}
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="new_pass" className={defaultLabel}>
                  Nova senha
                </label>
                <input
                  type="password"
                  id="new_pass"
                  className={classNames(
                    errors.new_pass &&
                      (errors.new_pass.message || errors.new_pass.type === 'required')
                      ? errorInput
                      : defaultInput
                  )}
                  {...register('new_pass', { 
                    required: true,
                    validate: (value) =>
                      validatePass(value),
                  })}
                />
                {errors.new_pass && (
                  errors.new_pass.type === 'required' && (
                    <p className={errorFormMessage}>Este campo é obrigatório</p>
                  ) || 
                  errors.new_pass.message && (
                    <p className={errorFormMessage}>
                      <>
                        {errors.new_pass.message}
                      </>
                    </p>
                  )
                )}
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label htmlFor="confirm_pass" className={defaultLabel}>
                  Confirmar atual
                </label>
                <input
                  type="password"
                  id="confirm_pass"
                  className={classNames(
                    errors.confirm_pass && 
                      (errors.confirm_pass.message || errors.confirm_pass.type === 'required')
                      ? errorInput
                      : defaultInput
                  )}
                  {...register('confirm_pass', { 
                    required: true,
                    validate: (value) =>
                      confirmPass(value, getValues('new_pass')) || 'Os campos de senha precisam ser iguais',
                  })}
                />
                {errors.confirm_pass && (
                  errors.confirm_pass.type === 'required' && (
                    <p className={errorFormMessage}>Este campo é obrigatório</p>
                  ) || 
                  errors.confirm_pass.message && (
                    <p className={errorFormMessage}>
                      <>
                        {errors.confirm_pass.message}
                      </>
                    </p>
                  )
                )}
              </div>
              <div className="col-span-4 sm:col-span-2">
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Requisitos da senha:</div>
                <div className="mb-1 text-sm font-normal text-gray-500 dark:text-gray-400">Certifique-se de que os requisitos sejam atendidos:</div>
                <ul className="pl-4 space-y-1 text-gray-500 dark:text-gray-400">
                  <li className="text-xs font-normal">Pelo menos 8 caracteres (e até 100 caracteres)</li>
                  <li className="text-xs font-normal">Pelo menos um caractere minúsculo</li>
                  <li className="text-xs font-normal">Caracteres especiais também são aceitos, por exemplo, ! @ # ?</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-white dark:bg-gray-800 flex justify-end sm:px-6">
            <Button type="submit">Salvar</Button>
          </div>
        </div>
      </form>
    </section>
  );
}