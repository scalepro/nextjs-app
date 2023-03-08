import { useState, useEffect, useRef, Fragment } from 'react';
import { Modal, Button, Spinner } from 'flowbite-react';
import { useForm } from 'react-hook-form';
import { classNames } from '@/services/functions';
import { HiColorSwatch, HiNewspaper, HiFlag } from 'react-icons/hi';
import toast, { Toaster } from 'react-hot-toast';
import Toast from '@/components/app/Toast';
import Stepper from '@/components/app/Stepper';
import FirstStepModalTheme from './FirstSepModalTheme';
import SecondStepModalTheme from './SecondStepModalTheme';

export default function InstallThemeModal({ themeModalView, setThemeModalView }){

  const definedCategories = [
    {
      key: 0,
      name: 'Casa e Cozinha',
      selected: false,
    },
    {
      key: 1,
      name: 'Saúde e Beleza',
      selected: false,
    },
    {
      key: 2,
      name: 'Jardinagem',
      selected: false,
    },
    {
      key: 3,
      name: 'Fitness',
      selected: false,
    },
    {
      key: 4,
      name: 'Eletrônicos',
      selected: false,
    },
    {
      key: 5,
      name: 'Calçados',
      selected: false,
    },
    {
      key: 6,
      name: 'Bebê',
      selected: false,
    }
  ];

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

  const [primaryColor, setPrimaryColor] = useState("#AABBCC");
  const [primaryColorPicker, setPrimaryColorPicker] = useState(false);
  const primaryColorPickerRef = useRef(null);
  const [secondaryColor, setSecondaryColor] = useState("#BBCCDD");
  const [secondaryColorPicker, setSecondaryColorPicker] = useState(false);
  const secondaryColorPickerRef = useRef(null);
  const [headerPrimary, setHeaderPrimary] = useState(false);
  const [dropdownCategories, setDropdownCategories] = useState(false);
  const dropdownCategoriesRef = useRef(null);
  const [categories, setCategories] = useState(definedCategories);
  const [searchCategories, setSearchCategories] = useState("");

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [actualStep, setActualStep] = useState(0);

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
    header_message: '',
    categories: []
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

  const listCategories = (searchCategory) => {
    if(searchCategory != ""){
      return categories.filter((item) => item.name.toLowerCase().includes(searchCategory.toLowerCase()));
    }else{
      return categories;
    }
  }

  const onHandleSearchCategories = (event) => {
    let { name, value } = event.target;
    setSearchCategories(value);
    console.log(value);
  }

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
                  <FirstStepModalTheme
                    colors={colors}
                    errors={errors}
                    control={control}
                    setValue={setValue}
                    primaryColor={primaryColor}
                    setPrimaryColor={setPrimaryColor}
                    primaryColorPicker={primaryColorPicker}
                    setPrimaryColorPicker={setPrimaryColorPicker}
                    primaryColorPickerRef={primaryColorPickerRef}
                    secondaryColor={secondaryColor}
                    setSecondaryColor={setSecondaryColor}
                    secondaryColorPicker={secondaryColorPicker}
                    setSecondaryColorPicker={setSecondaryColorPicker}
                    secondaryColorPickerRef={secondaryColorPickerRef}
                    headerPrimary={headerPrimary}
                    setHeaderPrimary={setHeaderPrimary}
                  />
                </div>
                <div id="secondStep" className={classNames(
                  actualStep == 1 ? "block" : "hidden",
                  "grid grid-cols-4 gap-4"
                )}>
                  <SecondStepModalTheme
                    errors={errors}
                    register={register}
                    categories={categories}
                    setCategories={setCategories}
                    dropdownCategories={dropdownCategories}
                    setDropdownCategories={setDropdownCategories}
                    dropdownCategoriesRef={dropdownCategoriesRef}
                    searchCategories={searchCategories}
                    onHandleSearchCategories={onHandleSearchCategories}
                    listCategories={listCategories}
                  />
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