export default function InfosUserLoading() {
  return (
    <div className="mt-7">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 animate-pulse">
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Endereço de email
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4 sm:w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            CPF
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Telefone
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            CEP
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3 sm:w-3/4"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Estado
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4 sm:w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Cidade
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Endereço
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Número
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3 sm:w-3/4"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Complemento
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-3/4 sm:w-2/3"></div>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Bairro
          </dt>
          <div className="mt-2 h-2 bg-gray-300 rounded-full dark:bg-gray-600 w-2/3"></div>
        </div>
      </dl>
    </div>
  );
}
