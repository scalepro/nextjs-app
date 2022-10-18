import { HiUser } from 'react-icons/hi';

export default function AvatarUserLoading() {
  return (
    <div className="mt-6 -mx-6 bg-gray-100 dark:bg-gray-700 px-6 py-5 md:flex md:items-center md:justify-between md:space-x-5 animate-pulse">
      <div className="flex items-start space-x-5">
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-full flex justify-center items-center bg-gray-400 dark:bg-gray-600">
            <HiUser className="-mt-1 h-8 w-8 text-gray-700 dark:text-gray-200" />
          </div>
        </div>
        <div className="pt-1.5 h-full">
          <div className="mb-3 sm:mt-2">
            <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-600 w-48"></div>
          </div>
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-64"></div>
            <div className="mt-2 sm:mt-0 sm:hidden h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-36"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
