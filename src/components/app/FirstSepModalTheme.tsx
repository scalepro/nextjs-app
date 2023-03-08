import { BlockPicker } from 'react-color';
import { HiChevronDown } from 'react-icons/hi';
import { Controller } from 'react-hook-form';
import MaskedInput from 'react-text-mask';
import { classNames } from '@/services/functions';
import { ToggleSwitch } from 'flowbite-react';
import { errorInputDefineColor, defaultLabel, errorFormMessage } from '@/styles/StyledElements';

export default function FirstStepModalTheme({ 
  colors,
  errors,
  control,
  setValue,
  primaryColor,
  setPrimaryColor,
  primaryColorPicker, 
  setPrimaryColorPicker,
  primaryColorPickerRef,
  secondaryColor,
  setSecondaryColor,
  secondaryColorPicker,
  setSecondaryColorPicker,
  secondaryColorPickerRef,
  headerPrimary,
  setHeaderPrimary
}){
  
  return(
    <>
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
    </>
  )
}