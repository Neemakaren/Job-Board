import React from "react";
import {
  Hero2,
  JobFind,
  Jobs,
  Banner,
  Featured,
  Blog,
  Testimonials,
  Agency,
} from "../components";

import Search from "../components/Search";

const Home = ({ categories, filterItems, jobItems, valid }) => {
  return (
    <>
      <Hero2 />

      {/* <Search /> */}
      <Jobs
        categories={categories}
        filterItems={filterItems}
        jobItems={jobItems}
      />
      <Banner />
      <Featured valid={valid} />
      <JobFind />
      <Blog />
      <Testimonials />
      <Agency />
    </>
  );
};

export default Home;
