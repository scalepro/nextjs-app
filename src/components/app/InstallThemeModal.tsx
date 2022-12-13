import { useState, useEffect, useRef, Fragment } from 'react';
import { Modal, Button } from 'flowbite-react';
import { useForm, Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { classNames } from '@/services/functions';
import { BlockPicker } from 'react-color';
import { HiChevronDown } from 'react-icons/hi';
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
  const {
    register,
    handleSubmit,
    reset,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (primaryColorPickerRef.current && !primaryColorPickerRef.current.contains(event.target as Node)) {
        setPrimaryColorPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return(
    <>
      <Fragment>
        <Modal
          show={themeModalView}
          size="7xl"
          onClose={() => {
            setThemeModalView(false)
          }}
        >
          <Modal.Header>
            Small modal
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-4">
                  <label htmlFor="primary_color" className={defaultLabel}>
                    Cor primária
                  </label>
                  <div className="flex">
                    <button onClick={()=>setPrimaryColorPicker(true)} className="relative flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                      <div id="primaryColorContainer" style={{ visibility: primaryColorPicker ? "visible" : "hidden" }} className="-ml-4 mt-4 absolute top-full" ref={primaryColorPickerRef}>
                        <BlockPicker 
                          color={primaryColor}
                          onChangeComplete={(color) => setPrimaryColor(color.hex)}
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
                            'focus-visible:ring-primary-500 focus-visible:border-primary-500 uppercase'
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
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button>
              I accept
            </Button>
            <Button
              color="gray"
            >
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    </>
  );
}