const style = {
  formWrapper:
    "flex flex-col gap-4 max-w-[700px] mx-auto p-3 bg-white rounded-xl shadow-md",

  errorText: "text-error-text text-sm",

  textarea:
    "w-full border border-input-border rounded p-3 resize-none bg-input-background text-input-text focus:outline-none focus:border-input-border-active",

  fileUploadWrapper: "flex flex-col items-start gap-2",

  fileLabel:
    "flex flex-col items-center gap-2 cursor-pointer bg-input-background border border-dashed border-input-border rounded-xl p-6 hover:bg-gray-50 transition-colors",

  uploadIcon: "w-10 h-10",

  uploadText: "text-sm text-gray-600",

  uploadButton: "w-32 h-10",

  hiddenFileInput: "hidden",

  fileInput:
    "w-54 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-color-primary file:text-white file:cursor-pointer h-10",

  locationThemeWrapper: "flex gap-4",

  locationInput:
    "flex-1 border border-input-border rounded p-1.5 bg-input-background text-input-text focus:outline-none focus:border-input-border-active",

  themeWrapper: "relative flex-1",

  themeSelect:
    "flex justify-between items-center w-full border border-input-border rounded p-1.5 bg-input-background text-input-text focus:outline-none focus:border-input-border-active cursor-pointer",

  themeDropdown:
    "absolute z-10 mt-2 max-h-40 w-full overflow-y-auto border rounded bg-white p-2 shadow-md",

  themeDropdownTitle: "mb-2 text-sm text-gray-600",

  themeItemLabel: "flex items-center mb-1",
  themeItemCheckbox: "mr-2",
};

export default style;
