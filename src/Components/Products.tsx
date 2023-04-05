<main className="flex-1 pb-8">
{/* Page header */}
<div className="bg-white shadow">
  <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
    <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
      <div className="min-w-0 flex-1">
        {/* Profile */}
        <div className="flex items-center">
          <div>
            <div className="flex items-center">
              <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                Products
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Import Products
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Export Products
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Add Products
        </button>
      </div>
    </div>
  </div>
</div>

<div className="mt-8">
  <div>
    <div className="hidden sm:block">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex flex-col">
          <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    className="bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Name
                  </th>
                  <th
                    className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Collection
                  </th>
                  <th
                    className="hidden bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900 md:block"
                    scope="col"
                  >
                    Status
                  </th>
                  <th
                    className="bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900"
                    scope="col"
                  >
                    Availability
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="bg-white">
                    <td className="w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      <div className="flex">
                        <a
                          href={transaction.href}
                          className="group inline-flex space-x-2 truncate text-sm"
                        >
                          <BanknotesIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <p className="truncate text-gray-500 group-hover:text-gray-900">
                            {transaction.name}
                          </p>
                        </a>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                      <span className="font-medium text-gray-900">
                        {transaction.amount}
                      </span>
                      {transaction.currency}
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block">
                      <span
                        className={classNames(
                          statusStyles[transaction.status],
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                        )}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500">
                      <time dateTime={transaction.datetime}>
                        {transaction.date}
                      </time>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{' '}
                  <span className="font-medium">10</span> of{' '}
                  <span className="font-medium">20</span> results
                </p>
              </div>
              <div className="flex flex-1 justify-between sm:justify-end">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Next
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>