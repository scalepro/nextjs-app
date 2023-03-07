import { useState, useEffect, useRef, Fragment } from 'react';
import { Modal, Button, ToggleSwitch, Spinner, Dropdown, Checkbox, Label } from 'flowbite-react';
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
  const [dropdownCategories, setDropdownCategories] = useState(false);
  const dropdownCategoriesRef = useRef(null);

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

  let categories = [
    {
      name: 'Casa e Cozinha',
      selected: false,
    }
  ]

  const colors = [
    "#f44336", "#1976d2",
    "#e91e63", "#689f38", 
    "#fbc02d", "#e57373", 
    "#64b5f6", "#f06292", 
    "#aed581", "#fff176",
  ];

  const defaultValues = {
    primary_color: primaryColor, 
    secondary_color: secondaryColor,
    header_message: ''
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
      if (dropdownCategoriesRef.current && !dropdownCategoriesRef.current.contains(event.target as Node)) {
        setDropdownCategories(false);
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
                <div className="mb-4">
                  <Stepper infoSteps={infoSteps} actualStep={actualStep} />
                </div>
                <div id="firstStep" className={classNames(
                  actualStep == 0 ? "block" : "hidden",
                  "grid grid-cols-4 gap-4"
                )}>
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
                              setSecondaryColor(color.hex);
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
                <div id="secondStep" className={classNames(
                  actualStep == 1 ? "block" : "hidden",
                  "grid grid-cols-4 gap-4"
                )}>
                  <div className="col-span-4">
                    <label htmlFor="header_message" className={defaultLabel}>
                      Mensagem do header
                    </label>
                    <input
                      type="text"
                      id="header_message"
                      className={classNames(
                        errors.header_message && !errors.header_message.message
                          ? errorInput
                          : defaultInput,
                        ' uppercase'
                      )}
                      placeholder="EX.: SÓ HOJE! FRETE GRÁTIS PARA TODO O BRASIL"
                      {...register('header_message', { required: true })}
                    />
                    {errors.header_message &&
                      errors.header_message.type === 'required' && (
                        <p className={errorFormMessage}>
                          Este campo é obrigatório
                        </p>
                      )
                    }
                  </div>
                  <div className="col-span-4">
                    <span className={defaultLabel}>Categorias</span>
                    <button id="dropdownCategoriesButton" onClick={() => setDropdownCategories(!dropdownCategories)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                      Selecionar categorias
                      <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>

                    <div id="dropdownCategories" ref={dropdownCategoriesRef} className={classNames(dropdownCategories ? "block" : "hidden","absolute mt-2 z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-600")}>
                      <div className="p-3">
                        <label htmlFor="input-group-search" className="sr-only">Buscar</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                          </div>
                          <input type="text" id="input-group-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar categoria" />
                        </div>
                      </div>
                      <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-11" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Bonnie Green</label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-12" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-12" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Jese Leos</label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-13" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-13" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Michael Gough</label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-14" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-14" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Robert Wall</label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-15" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-15" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Joseph Mcfall</label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-16" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-16" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Leslie Livingston</label>
                          </div>
                        </li>
                        <li>
                          <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-17" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label htmlFor="checkbox-item-17" className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">Roberta Casas</label>
                          </div>
                        </li>
                      </ul>
                    </div>
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