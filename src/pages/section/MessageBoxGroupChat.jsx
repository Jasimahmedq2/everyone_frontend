import React from "react";

const MessageBoxGroupChat = () => {
  return (
    <div className="grow flex flex-col">
      <div className="flex gap-5 justify-between px-4 py-3 bg-white border-b border-solid border-black border-opacity-10">
        <div className="flex gap-2 justify-between">
          <div className="flex flex-col self-start">
            <div className="flex gap-2.5 max-md:pr-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83ea4c409a7d42f61046980685c0e6a982777276eb8538b60f4dbb8b1cbc4a1d?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 rounded-full aspect-square w-[21px]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/65e23029379234cb7dc1a27fac1e5a18cfa7fce66b1b697cbfdc87563925d600?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 rounded-full aspect-square w-[21px]"
              />
            </div>
            <div className="flex gap-2.5 mt-1.5 text-xs font-medium text-white whitespace-nowrap max-md:pr-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d7cbc712c628ef58fdd6f90810c63ad9bd66700eb0302f76d7d800499fc972b?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 rounded-full aspect-square w-[21px]"
              />
              <div className="justify-center items-center bg-rose-500 rounded-full h-[21px] w-[21px]">
                +2
              </div>
            </div>
          </div>
          <div className="flex flex-col py-1 pr-1.5 pl-0.5">
            <div className="text-lg font-semibold leading-5 text-zinc-900">
              Alex, Buckmaster, Lisa & 2 others
            </div>
            <div className="mt-1.5 text-sm leading-4 text-sky-950 text-opacity-80">
              Group Chat
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d08425a2d0a04a102a91604beade28be2f8114d933b468c98f25e319f824b23?apiKey=bef308c750544a03a3bf2b5acb540117&"
          className="shrink-0 self-start w-36 max-w-full aspect-[3.03]"
        />
      </div>
      <div className="px-12 mt-6">
        <div className="flex gap-3.5 max-md:flex-wrap ">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7560fbdad325c17266dc1804fd57e679d4242f429744260722ac52fef7103170?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 self-start aspect-square w-[41px]"
          />
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex gap-3.5 justify-between self-start px-5">
              <div className="text-lg font-medium text-neutral-900">Lisa</div>
              <div className="text-base text-slate-500">10:12 AM</div>
            </div>
            <div className="flex gap-2.5 justify-between pr-3 mt-2 text-lg font-normal text-zinc-900 max-md:flex-wrap">
              <div className="justify-center px-6 py-4 bg-blue-50 rounded-none max-md:px-5 max-md:max-w-full">
                Lorem ipsum dLorem ipsum dolor sit ametolor sit amet
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b29757a30b3179c8d5ecfa3ee4cf3b9a9e8ddca888b0a7d172d03f11175cbed2?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
              />
            </div>
          </div>

        </div>
        <div className="flex gap-3 justify-end justify-self-end mt-7">
          <div className="flex flex-col items-end">
            <div className="flex gap-2 px-5">
              <div className="text-base text-slate-500">10:30 AM</div>
              <div className="text-base font-semibold text-zinc-900">
                Dristin Watson
              </div>
            </div>
            <div className="flex gap-1.5 justify-between self-stretch pl-3 mt-2 text-base font-medium text-zinc-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/133fad49c414e61854207e529f81f3d88f9c50edbd6ba0a8632ac66c2db6750c?apiKey=bef308c750544a03a3bf2b5acb540117&"
                className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
              />
              <div className="justify-center px-7 py-4 bg-blue-50 rounded-xl">
                Great That’s a nice design Idea. 😍👏
              </div>
            </div>
            <div className="flex gap-2 justify-between px-5 mt-2">
              <div className="text-xs font-medium text-zinc-900">Seen by</div>
              <div className="flex gap-px">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83fe16251268a39e20bbf37ab3738eb851daa6a8d161b3eb1b8d2afcc1d503e3?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 w-4 rounded-full aspect-[1.06]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/adf2f48ac7aa273fe3b9aa3713b7c0f2b35ba687a773896c1dd32f424001ed2c?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 rounded-full aspect-square w-[15px]"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1de73e455400115f5525385359119129ba30cf4ea155095e5bc0105cfdca5ae8?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 rounded-full aspect-square w-[15px]"
                />
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/77ec7959c053ac2071195d427248e32e64a1a035efd337bc06c6cbe546a2c4df?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 self-start aspect-square w-[41px]"
          />
        </div>
        <div className="flex flex-col max-w-[434px] mt-5">
          <div className="flex gap-3.5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/36e31f1cd7f5322a6c46a0cc29dfb01e2257bfc0d0b085b887cb3f3066967519?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 self-start aspect-square w-[41px]"
            />
            <div className="flex flex-col">
              <div className="flex gap-3.5 justify-between px-5">
                <div className="text-lg font-medium text-neutral-900">
                  Raheel Khan
                </div>
                <div className="text-base text-slate-500">10:12 AM</div>
              </div>
              <div className="flex gap-2.5 justify-between pr-3 mt-1.5 text-lg font-normal text-zinc-900">
                <div className="justify-center px-6 py-4 bg-blue-50 rounded-none">
                  Lorem ipsum Lorem amet sit amet
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/58fe9d1f2084bf2e80c944a6c41150debc6b16aa6a101ff5def38110df76c0bd?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 mt-8">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac44985f5e59bd91025bacb334972568e7eaaae55154d1b9de3883e50f80c7be?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 self-start aspect-[0.98] w-[41px]"
            />
            <div className="flex flex-col">
              <div className="flex gap-3.5 px-5">
                <div className="text-lg font-medium text-neutral-900">
                  Raheel Khan
                </div>
                <div className="text-base text-slate-500">10:12 AM</div>
              </div>
              <div className="flex gap-3 justify-between pr-5 mt-3.5">
                <div className="flex gap-3 py-2 pr-3 pl-2 bg-blue-50 rounded-3xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/df6ec01a67d7ff0ef789364e203e7c923d98830ec93c9f7fafa3a4462c0109da?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 py-2 pr-1.5 pl-2 w-8 aspect-square"
                  />
                  <div className="flex gap-1 justify-between py-2 pr-3 pl-1.5">
                    <div className="flex gap-1 self-start">
                      <div className="shrink-0 my-auto w-0.5 h-2 bg-black rounded-sm" />
                      <div className="shrink-0 w-0.5 h-3.5 bg-black rounded-sm" />
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="shrink-0 self-stretch w-0.5 h-4 bg-black rounded-sm" />
                      <div className="shrink-0 self-start w-0.5 h-3.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-start w-0.5 h-3.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch w-0.5 h-4 bg-black rounded-sm" />
                      <div className="shrink-0 self-stretch my-auto w-0.5 h-2.5 bg-black rounded-sm" />
                    </div>
                  </div>
                  <div className="my-auto text-sm leading-4 text-red-600">0:05</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b95797f7adda25dc2ac45ee409fb9548a23196070a089000bbbc156227b5ce0?apiKey=bef308c750544a03a3bf2b5acb540117&"
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/de81f7172381fd8488230348b27047e6560d65af84b909f2a9d642e931de82f2?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 mt-7">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eccb5d8f23143135e4b752c7c372f4c2d5804cba257332ec7642710ab7d763d?apiKey=bef308c750544a03a3bf2b5acb540117&"
              className="shrink-0 self-start aspect-square w-[41px]"
            />
            <div className="flex flex-col">
              <div className="flex gap-3.5 justify-between px-5">
                <div className="text-lg font-medium text-neutral-900">
                  Buckmaster
                </div>
                <div className="text-base text-slate-500">10:12 AM</div>
              </div>
              <div className="flex gap-2.5 justify-between pr-3 mt-2 text-lg font-medium text-zinc-900">
                <div className="justify-center px-6 py-4 bg-blue-50 rounded-none">
                  Lorem ipsum Lorem amet sit amet
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/786284b9c757637081ec552dccf7a71b1ee715a3380e6400f533520a369086c2?apiKey=bef308c750544a03a3bf2b5acb540117&"
                  className="shrink-0 my-auto w-1 aspect-[0.24] fill-slate-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 px-4 py-3.5 mt-12 w-full text-base bg-gray-50 rounded-xl text-stone-400 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex-auto my-auto">Type a message...</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b5c1502f4db2390a539b89d1466c535b600cee65b883f0cb729f39d07aa5192?apiKey=bef308c750544a03a3bf2b5acb540117&"
            className="shrink-0 max-w-full aspect-[3.7] w-[141px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBoxGroupChat;