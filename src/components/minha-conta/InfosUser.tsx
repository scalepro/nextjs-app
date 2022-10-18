export default function InfosUser({ personalData }) {
  return (
    <div className="mt-7">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Endereço de email
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.email}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            CPF
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.cpf ? personalData.cpf : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Telefone
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.phone ? personalData.phone : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            CEP
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.cep ? personalData.cep : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Estado
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.state ? personalData.state : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Cidade
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.city ? personalData.city : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Endereço
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.address ? personalData.address : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Número
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.number ? personalData.number : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Complemento
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.complement ? personalData.complement : '-'}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Bairro
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {personalData.neighborhood ? personalData.neighborhood : '-'}
          </dd>
        </div>
      </dl>
    </div>
  );
}
