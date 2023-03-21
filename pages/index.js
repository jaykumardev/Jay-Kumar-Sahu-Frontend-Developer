import Head from "next/head";
import Hero from "@/components/home/Hero";
import Header from "@/components/home/Header";
import Missions from "@/components/home/Missions";
import ComboBox from "@/components/common/ComboBox";
import QuickView from "@/components/common/QuickView";
import CapsulesList from "@/components/common/CapsulesList";
import { useState } from "react";
import { DateTime } from "luxon";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Home({ capsules }) {
  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const formatDate = (data) => {
    return DateTime.fromISO(data).toFormat("dd LLL yyyy, hh:mm a");
  };

  const dummyFunction = (data) => {
    return data;
  };

  const statuses = [...new Set(capsules.map((c) => c.status))];
  const [selectedStatus, setSelectedStatus] = useState(null);

  const originalLaunches = [...new Set(capsules.map((c) => c.original_launch))];
  const [selectedOriginalLaunch, setSelectedOriginalLaunch] = useState(null);

  const types = [...new Set(capsules.map((c) => c.type))];
  const [selectedType, setSelectedType] = useState(null);

  const filteredItems = capsules.filter(
    (c) =>
      (selectedType ? selectedType.includes(c.type) : capsules) &&
      (selectedStatus
        ? selectedStatus.includes(capitalizeFirstLowercaseRest(c.status))
        : capsules) &&
      (selectedOriginalLaunch
        ? selectedOriginalLaunch.includes(formatDate(c.original_launch))
        : capsules)
  );

  const [searchItems, setSearchItems] = useState(null);

  const handleSearchClick = () => {
    return setSearchItems(filteredItems);
  };

  return (
    <>
      <Head>
        <title>SpaceX</title>
        <meta
          name="description"
          content="SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Header />
        <Hero />
        <Missions />
        {/* Search Form */}
        <div className="bg-gray-900 py-10 space-y-5 px-6 lg:px-8">
          {/* Search ComboBoxes */}
          <div className="justify-center sm:flex space-y-5 sm:space-y-0 gap-5">
            <ComboBox
              myFunction={formatDate}
              allData={originalLaunches}
              label="Original Launch"
              selectedData={selectedOriginalLaunch}
              setSelectedData={setSelectedOriginalLaunch}
            />
            <ComboBox
              myFunction={capitalizeFirstLowercaseRest}
              allData={statuses}
              label="Status"
              selectedData={selectedStatus}
              setSelectedData={setSelectedStatus}
            />
            <ComboBox
              myFunction={dummyFunction}
              allData={types}
              label="Type"
              selectedData={selectedType}
              setSelectedData={setSelectedType}
            />
          </div>

          {/* Search button */}
          <div className="pt-5 flex justify-center">
            <button
              type="button"
              onClick={handleSearchClick}
              className="inline-flex items-center bg-transparent py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm ring-2 ring-inset ring-white hover:bg-gray-50 hover:text-gray-900"
            >
              <MagnifyingGlassIcon
                className="-ml-0.5 mr-2 h-5 w-5"
                aria-hidden="true"
              />
              Search Capsules
            </button>
          </div>

          {/* Filtered Capsules list */}
          <CapsulesList
            capsules={searchItems}
            label="Oops! Nothing found. Try changing your selection."
          />
        </div>
        <QuickView />
        <div className="bg-gradient-to-br from-gray-800 via-gray-600 to-gray-900 py-10">
          <CapsulesList capsules={capsules} />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/capsules");
  const capsules = await res.json();
  return {
    props: {
      capsules,
    },
  };
};
