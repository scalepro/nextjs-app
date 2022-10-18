export default function InfosBusinessLoading() {
  return (
    <div className="mt-7">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 animate-pulse">
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Nome
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4 sm:w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Alias
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Token
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Chave secreta
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3 sm:w-3/4"></div>
        </div>
      </dl>
    </div>
  );
}
