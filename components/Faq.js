import React from "react";

const Faq = () => {
  return (
    <section className="font-inter bg-faq-img bg-cover" id="contact-us">
      <section className="container mx-auto min-h-screen flex items-center flex-col md:flex-row py-28 px-4 lg:px-0">
        <section className="flex-1">
          <header className="border-l-4 border-primary text-white">
            <h2 className="font-black uppercase text-3xl md:text-4xl pl-2 md:w-2/3">Frequently Asked Questions</h2>
          </header>
          <p className="text-white py-7 leading-relaxed w-3/4">
            Questions not answered? Don&apos;t worry you can contact us directly through our contact number or our official
            email address.
          </p>
          <section className="space-y-4">
            <p className="text-white flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mr-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0594 20.1375L21.1594 18.0375C21.4423 17.7582 21.8001 17.567 22.1895 17.4871C22.5789 17.4072 22.9832 17.4421 23.3532 17.5875L25.9125 18.6094C26.2864 18.7612 26.607 19.0202 26.8339 19.3539C27.0608 19.6876 27.1838 20.0809 27.1875 20.4844V25.1719C27.1854 25.4464 27.1277 25.7176 27.0179 25.9692C26.9082 26.2208 26.7486 26.4476 26.5489 26.6359C26.3492 26.8242 26.1135 26.9701 25.8559 27.065C25.5983 27.1598 25.3242 27.2015 25.05 27.1875C7.11566 26.0719 3.49691 10.8844 2.81253 5.07191C2.78076 4.78648 2.80979 4.49755 2.8977 4.22414C2.98562 3.95073 3.13042 3.69903 3.3226 3.4856C3.51477 3.27218 3.74996 3.10186 4.01268 2.98585C4.27541 2.86984 4.55972 2.81078 4.84691 2.81254H9.37503C9.77911 2.81373 10.1736 2.93579 10.5077 3.163C10.8419 3.39022 11.1004 3.7122 11.25 4.08754L12.2719 6.64691C12.4221 7.01542 12.4605 7.42002 12.3821 7.81017C12.3037 8.20033 12.1122 8.55875 11.8313 8.84066L9.73128 10.9407C9.73128 10.9407 10.9407 19.125 19.0594 20.1375Z"
                  fill="#FEE402"
                />
              </svg>
              +1234567890
            </p>
            <p className="text-white flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                className="mr-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.25 12.5V5C26.25 3.625 25.125 2.5 23.75 2.5H3.75C2.375 2.5 1.2625 3.625 1.2625 5L1.25 20C1.25 21.375 2.375 22.5 3.75 22.5H17.5V16.25C17.5 14.175 19.175 12.5 21.25 12.5H26.25ZM13.75 13.75L3.75 7.5V5L13.75 11.25L23.75 5V7.5L13.75 13.75Z"
                  fill="#FEE402"
                />
                <path
                  d="M26.25 17.5V22.5C26.25 23.875 25.125 25 23.75 25C22.375 25 21.25 23.875 21.25 22.5V16.875C21.25 16.525 21.525 16.25 21.875 16.25C22.225 16.25 22.5 16.525 22.5 16.875V22.5H25V16.875C25 16.0462 24.6708 15.2513 24.0847 14.6653C23.4987 14.0792 22.7038 13.75 21.875 13.75C21.0462 13.75 20.2513 14.0792 19.6653 14.6653C19.0792 15.2513 18.75 16.0462 18.75 16.875V22.5C18.75 25.2625 20.9875 27.5 23.75 27.5C26.5125 27.5 28.75 25.2625 28.75 22.5V17.5H26.25Z"
                  fill="#FEE402"
                />
              </svg>
              gymzone@gmail.com
            </p>
          </section>
        </section>
        <section className="flex-1 w-full mt-14 md:mt-0">
          <details className="mb-2" open>
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
              How long does the membership last?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">The membership costs $35 for 6 months.</p>
            </div>
          </details>

          <details className="mb-2">
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
              Opening and closing time of the gym
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">
                The gym opens at 8:00 A.M to 8:00 P.M, Monday to Saturday. The gym is closed at Sundays and closed during
                holidays.
              </p>
            </div>
          </details>

          <details className="mb-2">
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
              Can I workout even if I am not a member?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">Unfortunately you have to avail a membership that costs $35 for 6 months.</p>
            </div>
          </details>

          <details className="mb-2">
            <summary className="text-secondary p-4 bg-primary font-semibold cursor-pointer">
              Can I cancel the membership?
            </summary>
            <div className="content bg-white p-4">
              <p className="font-medium">
                Yes, you can cancel the membership. However you will not be able to refund the fees that you paid to become a
                member.
              </p>
            </div>
          </details>
        </section>
      </section>
    </section>
  );
};

export default Faq;
