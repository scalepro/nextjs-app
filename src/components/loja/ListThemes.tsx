import { IconContext } from 'react-icons';
import { useState } from 'react';
import InstallThemeModal from '@/components/app/InstallThemeModal';
import {
  HiCheckCircle,
  HiPlusCircle,
  HiMinusCircle,
  HiPencilAlt,
  HiEye
} from 'react-icons/hi';

const themes = [
  {
    name: 'Jane',
    description: 'Paradigm Representative',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=320',
    active: true,
  },
  {
    name: 'Cooper',
    description: 'Paradigm Representative',
    image:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&h=320',
    active: false,
  },
];

export default function ListThemes() {
  const [themeModalView, setThemeModalView] = useState(false);

  return (
    <>
      <InstallThemeModal 
        themeModalView={themeModalView}
        setThemeModalView={setThemeModalView}
      />
      <ul
        role="list"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        {themes.map((item, itemIdx) => (
          <li
            key={itemIdx}
            className="relative col-span-1 flex flex-col text-center bg-white dark:bg-gray-800 rounded-lg shadow divide-y overflow-hidden divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700"
          >
            {item.active && (
              <div className="absolute right-3 top-3">
                <div className="inline-flex items-center px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  <IconContext.Provider value={{ className: 'w-4 h-4 text-green-600 mr-1' }}>
                    <HiCheckCircle />
                  </IconContext.Provider>
                  Instalado
                </div>
              </div>
            )}
            <div className="w-full h-48 overflow-hidden">
              <img
                className="w-full h-full object-cover flex-shrink-0 mx-auto"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex-1 flex flex-col p-7">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-50 text-left">
                {item.name}
              </h5>

              <p className="font-normal text-sm text-gray-700 dark:text-gray-400 text-left">
                {item.description}
              </p>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200 dark:divide-gray-700">
                <div className="w-0 flex-1 flex">
                  {item.active ? (
                    <a
                      href="#"
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-500 dark:text-gray-300 font-medium border border-transparent rounded-bl-lg hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <IconContext.Provider value={{ className: 'w-4 h-4 text-gray-400' }}>
                        <HiPencilAlt />
                      </IconContext.Provider>
                      <div className="visible-fit-element">
                        <span className="ml-2">Editar</span>
                      </div>
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-500 dark:text-gray-300 font-medium border border-transparent rounded-bl-lg hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <IconContext.Provider value={{ className: 'w-4 h-4 text-gray-400' }}>
                        <HiEye />
                      </IconContext.Provider>
                      <div className="visible-fit-element">
                        <span className="ml-2">Visualizar</span>
                      </div>
                    </a>
                  )}
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  {item.active ? (
                    <a
                      href="#"
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-500 dark:text-gray-300 font-medium border border-transparent rounded-br-lg hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <IconContext.Provider value={{ className: 'w-4 h-4 text-gray-400' }}>
                        <HiMinusCircle />
                      </IconContext.Provider>
                      <div className="visible-fit-element">
                        <span className="ml-2">Desinstalar</span>
                      </div>
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={()=>setThemeModalView(true)}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-500 dark:text-gray-300 font-medium border border-transparent rounded-br-lg hover:text-gray-600 dark:hover:text-gray-200"
                    >
                      <IconContext.Provider value={{ className: 'w-4 h-4 text-gray-400' }}>
                        <HiPlusCircle />
                      </IconContext.Provider>
                      <div className="visible-fit-element">
                        <span className="ml-2">Instalar</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
