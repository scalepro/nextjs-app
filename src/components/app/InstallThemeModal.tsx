import { useState, useEffect, useRef, Fragment } from 'react';
import { Modal, Button, ToggleSwitch, Spinner } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { classNames } from '@/services/functions';
import { BlockPicker } from 'react-color';
import { HiChevronDown } from 'react-icons/hi';
import toast, { Toaster } from 'react-hot-toast';
import Toast from '@/components/app/Toast';
import {
  defaultInput,
  errorInput,
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
  const colors = [
    "#f44336", "#1976d2",
    "#e91e63", "#689f38", 
    "#fbc02d", "#e57373", 
    "#64b5f6", "#f06292", 
    "#aed581", "#fff176",
  ];

  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm();

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
                    <ol className="flex items-center w-full">
                      <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-700">
                        <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-600 shrink-0">
                          <svg aria-hidden="true" className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </span>
                      </li>
                      <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-600">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-600 shrink-0">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </span>
                      </li>
                      <li className="flex items-center w-full">
                        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-600 shrink-0">
                          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                        </span>
                      </li>
                    </ol>
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
                            onChangeComplete={(color) => setPrimaryColor(color.hex)}
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
                            }}
                            className={classNames(
                              errors.primary_color &&
                                (errors.primary_color.message ||
                                  errors.primary_color.type === 'required' ||
                                  errors.primary_color.type === 'minLength' ||
                                  errors.primary_color.type === 'maxLength')
                                ? errorInput
                                : 'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
                              'uppercase focus-visible:outline-none focus:ring-1 focus:z-10'
                            )}
                            placeholder="#AABBCC"
                          />
                        )}
                      />
                      {errors.primary_color &&
                        (((errors.primary_color.type === 'minLength' ||
                          errors.primary_color.type === 'maxLength') && (
                          <p className={errorFormMessage}>Código inválido</p>
                        )) ||
                          (errors.primary_color.type === 'required' && (
                            <p className={errorFormMessage}>
                              Este campo é obrigatório
                            </p>
                          )))}
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
                            onChangeComplete={(color) => setSecondaryColor(color.hex)}
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
                            }}
                            className={classNames(
                              errors.secondary_color &&
                                (errors.secondary_color.message ||
                                  errors.secondary_color.type === 'required' ||
                                  errors.secondary_color.type === 'minLength' ||
                                  errors.secondary_color.type === 'maxLength')
                                ? errorInput
                                : 'bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500',
                              'uppercase focus-visible:outline-none focus:ring-1 focus:z-10'
                            )}
                            placeholder="#BBCCDD"
                          />
                        )}
                      />
                      {errors.secondary_color &&
                        (((errors.secondary_color.type === 'minLength' ||
                          errors.secondary_color.type === 'maxLength') && (
                          <p className={errorFormMessage}>Código inválido</p>
                        )) ||
                          (errors.secondary_color.type === 'required' && (
                            <p className={errorFormMessage}>
                              Este campo é obrigatório
                            </p>
                          )))}
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
                <Button
                  color="gray"
                  onClick={() => {
                    setThemeModalView(false);
                    resetElements();
                  }}
                >
                  Cancelar
                </Button>
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
              </div>
            </Modal.Footer>
          </form>
        </Modal>
      </Fragment>
    </>
  );
}