import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export default function InfosBusiness({ businessData }) {
  const [secretKeyBluered, setSecretKeyBluered] = useState(true);
  return (
    <div className="mt-7">
      <dl className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Nome
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {businessData.name}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Alias
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            {businessData.alias}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Token
          </dt>
          <dd className="mt-1 text-sm text-gray-700 dark:text-gray-300 text-ellipsis overflow-hidden">
            {businessData.token}
          </dd>
        </div>
        <div className="col-span-2 sm:col-span-2">
          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Chave secreta
          </dt>
          <dd className="relative mt-1 text-sm text-gray-700 dark:text-gray-300">
            <span className={secretKeyBluered && 'blur-sm'}>
              {businessData.secret_key}
            </span>
            <button
              onClick={() => setSecretKeyBluered(!secretKeyBluered)}
              className="flex sm:hidden absolute right-2.5 bottom-1.5 text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              {secretKeyBluered ? <HiEye /> : <HiEyeOff />}
            </button>
            <button
              onMouseDown={() => setSecretKeyBluered(false)}
              onMouseUp={() => setSecretKeyBluered(true)}
              className="hidden sm:flex absolute right-2.5 bottom-1.5 text-gray-400 hover:text-gray-500 dark:hover:text-white"
            >
              <HiEye />
            </button>
          </dd>
        </div>
      </dl>
    </div>
  );
}
