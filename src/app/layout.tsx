import { Metadata } from "next";
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '南京恒企职业培训机构',
  description: '南京恒企教育学校业务涵盖财经类职业教育、IT类职业教育、设计类职业教育、产教融合、高端课程研发、图书文化出版、海外市场拓展等各个领域。恒企教育学校旨在为学员提供“一生一世”的终身职业教育服务。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
