import { defaultButton } from '@/styles/StyledElements';
import { HiUser } from 'react-icons/hi';

export default function AvatarUser({ personalData }) {
  return (
    <div className="mt-6 -mx-6 bg-gray-100 dark:bg-gray-700 px-6 py-5 md:flex md:items-center md:justify-between md:space-x-5">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full flex justify-center items-center bg-blue-600">
            <HiUser className="-mt-1 h-8 w-8 text-gray-100 dark:text-gray-200" />
          </div>
        </div>
        <div className="pt-1.5">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            {personalData.first_name + ' ' + personalData.last_name}
          </h1>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {'Cliente Scale Pro desde '}
            <time dateTime="2020-08-25">
              {personalData.created_account_date}
            </time>
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row sm:justify-end sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row">
        <button
          type="button"
          className="py-2.5 px-5 text-sm font-medium text-gray-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-gray-100 dark:hover:bg-gray-600 block sm:flex"
        >
          Alterar senha
        </button>
        <button type="button" className={'block ' + defaultButton}>
          Editar dados
        </button>
      </div>
    </div>
  );
}
