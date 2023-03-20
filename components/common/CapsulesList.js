import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { DateTime } from "luxon";
import { useState } from "react";

export default function CapsulesList({ capsules }) {
  const [loadMore, setLoadMore] = useState(6);
  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 py-10">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8 py-10"
      >
        {capsules.slice(0, loadMore).map((capsule, index) => (
          <li
            key={index}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="flex w-full justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 title="Capsule Serial" className="truncate">
                    <span className="text-sm text-gray-500">Serial: </span>
                    <span className="text-sm font-medium text-gray-900">
                      {capsule.capsule_serial}
                    </span>
                  </h3>
                  <span
                    title="Staus"
                    className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
                  >
                    {capsule.status}
                  </span>
                </div>

                <p
                  title={capsule.details}
                  className="mt-1 truncate text-sm text-gray-500"
                >
                  <span>Details: </span>
                  <span>
                    {capsule.details ? capsule.details : "Not available..."}
                  </span>
                </p>

                <p className="mt-1 truncate text-sm text-gray-500">
                  {capsule.original_launch ? (
                    <>
                      <span>Original launch: </span>
                      <span>
                        {DateTime.fromISO(capsule.original_launch).toFormat(
                          "dd LLL yyyy, hh:mm a"
                        )}
                      </span>
                    </>
                  ) : (
                    "Launch Details not available"
                  )}
                </p>
              </div>
              <p
                title="Capsule type"
                className="truncate text-sm font-semibold text-gray-500"
              >
                {capsule.type}
              </p>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="-ml-px flex w-0 flex-1">
                  <div className="relative -mr-px text-center w-0 flex-1 rounded-bl-lg border border-transparent py-4">
                    <div className="text-sm">Missions</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {capsule.missions.length}
                    </div>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <div className="relative -mr-px text-center w-0 flex-1 rounded-bl-lg border border-transparent py-4">
                    <div className="text-sm">Total Landings</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {capsule.landings}
                    </div>
                  </div>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <div className="relative -mr-px text-center w-0 flex-1 rounded-bl-lg border border-transparent py-4">
                    <div className="text-sm">Reuse Count</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {capsule.reuse_count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {loadMore <= capsules.length && (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setLoadMore(loadMore + 6)}
            className="bg-transparent py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-gray-50 hover:text-gray-900"
          >
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
}
