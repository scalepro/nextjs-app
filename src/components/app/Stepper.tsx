import { Fragment } from 'react';
import { classNames } from '@/services/functions';

export default function Stepper({ infoSteps, actualStep }){
  return (
    <div className="py-1">
      <ol className="flex items-center">
        <li className="flex items-center relative">
          <div className="rounded-full flex items-center justify-center transition duration-500 ease-in-out h-8 w-8 py-3 bg-blue-700">
            {
              infoSteps.slice(0, 1).map((step, stepIdx) => (
                <step.icon className="w-4 h-4 text-gray-100 dark:text-blue-300" aria-hidden="true" />
              ))
            }
          </div>
        </li>
        {
          infoSteps.length > 2 &&
          infoSteps.map((step, stepIdx) => (
            <Fragment key={stepIdx}>
              {stepIdx > 0 && stepIdx < (infoSteps.length - 1) && (
                <>
                  <li className={classNames(actualStep >= stepIdx ? "border-blue-700" : "border-gray-200 dark:border-gray-500", "flex-auto border-t-2 transition duration-500 ease-in-out")}></li>
                  <li className="flex items-center relative">
                    <div className={classNames(actualStep >= stepIdx ? "bg-blue-700" : "bg-gray-200 dark:bg-gray-500", "rounded-full flex items-center justify-center transition duration-500 ease-in-out h-8 w-8 py-3")}>
                      <step.icon className={classNames(actualStep >= stepIdx ? "text-gray-100 dark:text-blue-300" : "text-gray-700 dark:text-gray-100", "w-4 h-4")} aria-hidden="true" />
                    </div>
                  </li>
                </>
              )}
            </Fragment>
          ))
        }
        <li className={classNames(actualStep == (infoSteps.length - 1) ? "border-blue-700" : "border-gray-200 dark:border-gray-500", "flex-auto border-t-2 transition duration-500 ease-in-out")}></li>
        <li className="flex items-center relative">
          <div className={classNames(actualStep == (infoSteps.length - 1) ? "bg-blue-700" : "bg-gray-200 dark:bg-gray-500", "rounded-full flex items-center justify-center transition duration-500 ease-in-out h-8 w-8 py-3")}>
            {
              infoSteps.slice(infoSteps.length - 1, infoSteps.length).map((step, stepIdx) => (
                <step.icon className={classNames(actualStep == (infoSteps.length - 1) ? "text-gray-100 dark:text-blue-300" : "text-gray-700 dark:text-gray-100", "w-4 h-4")} aria-hidden="true" />
              ))
            }
          </div>
        </li>
      </ol>
    </div>
  )
}