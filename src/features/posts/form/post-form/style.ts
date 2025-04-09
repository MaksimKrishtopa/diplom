const style = {
  wrapper: 'flex flex-col gap-6 bg-[#fff] rounded-xl p-8 w-full',
  title: 'text-2xl font-medium text-[#040405] text-center',
  fieldWrapper: 'w-[347px] flex flex-col gap-2',
  inputWrapper: 'h-[98px] relative border border-dotted border-black rounded-md flex items-center justify-center px-4 py-2 w-full', 
  inputText: 'ml-1.5 text-base text-[#040405] font-medium',
  input: 'opacity-0 absolute inset-0 w-full h-full cursor-pointer',
  error: 'text-error-text text-sm',
  imageList: 'list-disc pl-5 text-sm text-[#040405]',
  imageName: 'truncate',
  textarea: 'border border-input-border rounded-md px-4 py-2 w-[347px] h-40 resize-none focus:outline-none focus:ring-2 focus:ring-input-border-active text-input-text',
  themeWrapper: 'w-[347px] flex flex-col gap-2',
  themeLabel: 'font-medium text-[#040405]',
  themeList: 'flex flex-wrap gap-2',
  themeButton: 'px-3 py-1.5 border border-primary text-primary rounded-md cursor-pointer transition-all text-sm',
  themeButtonSelected: 'bg-primary text-white border-primary',
  primaryButton: 'w-[181px] h-[48px] px-4 py-2 rounded-[16px] bg-primary text-white active:bg-primary-active',
  secondaryButton: 'w-[79px] h-[40px] px-4 py-2 rounded-[16px] bg-secondary text-primary border border-secondary-border active:bg-secondary-active active:border-secondary-active-border',
};

export { style };