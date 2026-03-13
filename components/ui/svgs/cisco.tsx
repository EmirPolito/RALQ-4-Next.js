export function Cisco({ height = 30, width = 60 }: { height?: number; width?: number }) {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 120 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 20v10h4V20h-4zm8-8v18h4V12h-4zm8 4v14h4V16h-4zm8-8v22h4V8h-4zm8 8v14h4V16h-4zm8-4v18h4V12h-4zm8 8v10h4V20h-4z" />
      <path d="M80 18c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.7-.5 3.8-1.3l-1.4-2.1c-.7.5-1.5.8-2.4.8-1.7 0-3-1.3-3-3s1.3-3 3-3c.9 0 1.7.3 2.4.8l1.4-2.1c-1.1-.7-2.4-1.1-3.8-1.1zm10 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm-20 3V18h3v12h-3zm10 0v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3V18h3v1c.8-.7 1.8-1 3-1 2.2 0 4 1.8 4 4v8h-3z" />
    </svg>
  )
}
