
import { classNames } from '@/services/functions';
import { defaultInput, errorInput, defaultLabel, errorFormMessage } from '@/styles/StyledElements';

export default function SecondStepModalTheme ({
  errors,
  register,
  categories,
  setCategories,
  dropdownCategories,
  setDropdownCategories,
  dropdownCategoriesRef,
  searchCategories,
  onHandleSearchCategories,
  listCategories
}){
  return(
    <>
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
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </div>
              <input type="text" onKeyUp={(event) => onHandleSearchCategories(event)} id="input-group-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar categoria" />
            </div>
          </div>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
            {listCategories(searchCategories).map((item) => (
              <fieldset key={item.key} name={`categories.${item.key}`}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input {...register(`categories.${item.key}.key`)} value={item.key} className="hidden" />
                  <input {...register(`categories.${item.key}.name`)} value={item.name} className="hidden" />
                  <input {...register(`categories.${item.key}.selected`)} id={`checkbox-${item.key}`} type="checkbox" defaultChecked={item.selected} value={item.selected ? 1 : 0} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onClick={() => {
                    let actualCategory = categories.find(({ key }) => key === item.key);
                    actualCategory.selected = !actualCategory.selected;
                    setCategories(categories);
                  }} />
                  <label htmlFor={`checkbox-${item.key}`} className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none">{item.name}</label>
                </div>
              </fieldset>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}