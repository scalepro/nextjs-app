import { useState, useEffect, useRef, Fragment } from 'react';
import { Modal, Button, ToggleSwitch, Spinner } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { classNames } from '@/services/functions';
import { BlockPicker } from 'react-color';
import { HiChevronDown, HiColorSwatch, HiNewspaper, HiFlag } from 'react-icons/hi';
import toast, { Toaster } from 'react-hot-toast';
import Toast from '@/components/app/Toast';
import Stepper from '@/components/app/Stepper';
import {
  defaultInput,
  errorInput,
  errorInputDefineColor,
  defaultLabel,
  errorFormMessage,
} from '@/styles/StyledElements';

export default function InstallThemeModal({ themeModalView, setThemeModalView }){
  const [primaryColor, setPrimaryColor] = useState("#AABBCC");
  const [primaryColorPicker, setPrimaryColorPicker] = useState(false);
  const primaryColorPickerRef = useRef(null);
  const [secondaryColor, setSecondaryColor] = useState("#BBCCDD");
  const [secondaryColorPicker, setSecondaryColorPicker] = useState(false);
  const secondaryColorPickerRef = useRef(null);
  const [headerPrimary, setHeaderPrimary] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [actualStep, setActualStep] = useState(0);

  const infoSteps = [
    {
      name: 'colors',
      icon: HiColorSwatch
    },
    {
      name: 'messages',
      icon: HiNewspaper
    },
    {
      name: 'finish',
      icon: HiFlag
    },
  ];

  const colors = [
    "#f44336", "#1976d2",
    "#e91e63", "#689f38", 
    "#fbc02d", "#e57373", 
    "#64b5f6", "#f06292", 
    "#aed581", "#fff176",
  ];

  const defaultValues = {
    primary_color: primaryColor, 
    secondary_color: secondaryColor 
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ 
    defaultValues
  });

  const resetElements = () => {
    reset();
    setPrimaryColor("#AABBCC");
    setPrimaryColorPicker(false);
    setSecondaryColor("#BBCCDD");
    setSecondaryColorPicker(false);
    setHeaderPrimary(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (primaryColorPickerRef.current && !primaryColorPickerRef.current.contains(event.target as Node)) {
        setPrimaryColorPicker(false);
      }
      if (secondaryColorPickerRef.current && !secondaryColorPickerRef.current.contains(event.target as Node)) {
        setSecondaryColorPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const onSubmit = (data) => {
    setLoadingSubmit(true);
    setTimeout(() => {
      console.log(data);
      setLoadingSubmit(false);
      setThemeModalView(false);
      resetElements();
      toast.custom((t) => (
        <Toast
          type="success"
          title="Tema instalado com sucesso!"
          toast={toast}
          id={t.id}
        />
      ));
    }, 5000);
  };

  return(
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Fragment>
        <Modal
          show={themeModalView}
          size="lg"
          onClose={() => {
            setThemeModalView(false)
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Modal.Header>
              Instalar tema
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-4">
                    <Stepper infoSteps={infoSteps} actualStep={actualStep} />
                  </div>
                  <div className="col-span-4">
                    <label htmlFor="primary_color" className={defaultLabel}>
                      Cor primária
                    </label>
                    <div className="flex">
                      <button onClick={()=>setPrimaryColorPicker(true)} className="relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" type="button">
                        <div id="primaryColorContainer" style={{ visibility: primaryColorPicker ? "visible" : "hidden" }} className="-ml-4 mt-4 absolute top-full z-10" ref={primaryColorPickerRef}>
                          <BlockPicker 
                            color={primaryColor}
                            onChangeComplete={(color) => {
                              setPrimaryColor(color.hex);
                              setValue('primary_color', color.hex);
                            }}
                            colors={colors}
                          />
                        </div>
                        <span className="w-5 h-4 mr-1 rounded-sm" style={{backgroundColor: primaryColor}}></span>
                        <HiChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      <Controller
                        control={control}
                        name="primary_color"
                        rules={{
                          required: true,
                          minLength: 7,
                          maxLength: 7,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <MaskedInput
                            mask={['#', /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i]}
                            guide={false}
                            value={primaryColor}
                            onChange={(event)=>{
                              let { name, value } = event.target;
                              setPrimaryColor(value);
                              setValue('primary_color', value);
                            }}
                            className={classNames(
                              errors.primary_color &&
                                (errors.primary_color.message ||
                                  errors.primary_color.type === 'required' ||
                                  errors.primary_color.type === 'minLength' ||
                                  errors.primary_color.type === 'maxLength')
                                ? errorInputDefineColor
                                : 'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
                              'uppercase focus-visible:outline-none focus:ring-1 focus:z-10'
                            )}
                            placeholder="#AABBCC"
                          />
                        )}
                      />
                    </div>
                    <div>
                      {errors.primary_color && (
                        ((errors.primary_color.type === 'minLength' ||
                          errors.primary_color.type === 'maxLength') && (
                          <p className={errorFormMessage}>Código inválido</p>
                        )) ||
                        (errors.primary_color.type === 'required' && (
                          <p className={errorFormMessage}>
                            Este campo é obrigatório
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="col-span-4">
                    <label htmlFor="secondary_color" className={defaultLabel}>
                      Cor secundária
                    </label>
                    <div className="flex">
                      <button onClick={()=>setSecondaryColorPicker(true)} className="relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" type="button">
                        <div id="secondaryColorContainer" style={{ visibility: secondaryColorPicker ? "visible" : "hidden" }} className="-ml-4 mt-4 absolute top-full z-10" ref={secondaryColorPickerRef}>
                          <BlockPicker 
                            color={secondaryColor}
                            onChangeComplete={(color) => {
                              setPrimaryColor(color.hex);
                              setValue('secondary_color', color.hex);
                            }}
                            colors={colors}
                          />
                        </div>
                        <span className="w-5 h-4 mr-1 rounded-sm" style={{backgroundColor: secondaryColor}}></span>
                        <HiChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      <Controller
                        control={control}
                        name="secondary_color"
                        rules={{
                          required: true,
                          minLength: 7,
                          maxLength: 7,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                          <MaskedInput
                            mask={['#', /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i, /[a-z\d]/i]}
                            guide={false}
                            value={secondaryColor}
                            onChange={(event)=>{
                              let { name, value } = event.target;
                              setSecondaryColor(value);
                              setValue('secondary_color', value);
                            }}
                            className={classNames(
                              errors.secondary_color &&
                                (errors.secondary_color.message ||
                                  errors.secondary_color.type === 'required' ||
                                  errors.secondary_color.type === 'minLength' ||
                                  errors.secondary_color.type === 'maxLength')
                                ? errorInputDefineColor
                                : 'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
                              'uppercase focus-visible:outline-none focus:ring-1 focus:z-10'
                            )}
                            placeholder="#BBCCDD"
                          />
                        )}
                      />
                    </div>
                    <div>
                      {errors.secondary_color && (
                        ((errors.secondary_color.type === 'minLength' ||
                        errors.secondary_color.type === 'maxLength') && (
                          <p className={errorFormMessage}>Código inválido</p>
                        )) ||
                        (errors.secondary_color.type === 'required' && (
                          <p className={errorFormMessage}>
                            Este campo é obrigatório
                          </p>
                        ))
                      )}
                  </div>
                  </div>
                  <div className="col-span-4 mt-2">
                    <ToggleSwitch
                      checked={headerPrimary}
                      label="Cor primária no header"
                      onChange={() => setHeaderPrimary(!headerPrimary)}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="w-full flex justify-end gap-3">
                { actualStep == 0 ? (
                  <Button
                    color="gray"
                    onClick={() => {
                      setThemeModalView(false);
                      resetElements();
                    }}
                  >
                    Cancelar
                  </Button>
                ) : (
                  <Button onClick={() => setActualStep(actualStep - 1) }>Voltar</Button>
                )}
                {actualStep < (infoSteps.length - 1) ? (
                  <Button onClick={() => setActualStep(actualStep + 1) }>Avançar</Button>
                ) : (
                  <>
                    {!loadingSubmit ? (
                      <Button type="submit">Salvar</Button>
                    ) : (
                      <Button>
                        <div className="mr-3">
                          <Spinner size="sm" light={true} />
                        </div>
                        Salvando ...
                      </Button>
                    )}
                  </>
                )}
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </Fragment>
    </>
  );
}