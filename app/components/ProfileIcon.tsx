'use client'
import { usePathname } from "next/navigation"

export default function ProfileIcon() {
    const pathName = usePathname()
    return (
        <div className={`${!pathName.includes('profileInfo')? "" : "bg-[#EFEBFF]"} px-[27px] py-[11px] rounded-lg`}>
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 0.5625C6.83122 0.5625 5.19992 1.05735 3.81238 1.98448C2.42484 2.9116 1.34338 4.22936 0.70477 5.77111C0.0661559 7.31286 -0.100935 9.00936 0.224628 10.6461C0.550191 12.2828 1.35379 13.7862 2.53379 14.9662C3.7138 16.1462 5.21721 16.9498 6.85393 17.2754C8.49064 17.6009 10.1871 17.4338 11.7289 16.7952C13.2706 16.1566 14.5884 15.0752 15.5155 13.6876C16.4427 12.3001 16.9375 10.6688 16.9375 9C16.935 6.763 16.0453 4.61833 14.4635 3.03653C12.8817 1.45473 10.737 0.564981 8.5 0.5625ZM4.71641 14.357C5.15163 13.7619 5.72107 13.2779 6.37849 12.9442C7.0359 12.6106 7.76276 12.4367 8.5 12.4367C9.23725 12.4367 9.9641 12.6106 10.6215 12.9442C11.2789 13.2779 11.8484 13.7619 12.2836 14.357C11.1778 15.1412 9.85565 15.5625 8.5 15.5625C7.14436 15.5625 5.82221 15.1412 4.71641 14.357ZM6.3125 8.375C6.3125 7.94235 6.4408 7.51942 6.68116 7.15969C6.92153 6.79996 7.26317 6.51958 7.66288 6.35401C8.0626 6.18845 8.50243 6.14513 8.92676 6.22953C9.3511 6.31394 9.74087 6.52228 10.0468 6.8282C10.3527 7.13413 10.5611 7.52391 10.6455 7.94824C10.7299 8.37257 10.6866 8.81241 10.521 9.21212C10.3554 9.61183 10.075 9.95347 9.71531 10.1938C9.35558 10.4342 8.93265 10.5625 8.5 10.5625C7.91984 10.5625 7.36344 10.332 6.95321 9.9218C6.54297 9.51156 6.3125 8.95516 6.3125 8.375ZM13.6563 13.0578C13.0486 12.2849 12.2741 11.6595 11.3906 11.2281C11.9537 10.658 12.3355 9.93402 12.4881 9.14738C12.6408 8.36074 12.5573 7.54653 12.2484 6.80718C11.9394 6.06783 11.4187 5.43637 10.7517 4.99223C10.0847 4.5481 9.30132 4.31112 8.5 4.31112C7.69869 4.31112 6.91528 4.5481 6.24831 4.99223C5.58135 5.43637 5.06062 6.06783 4.75165 6.80718C4.44267 7.54653 4.35925 8.36074 4.51187 9.14738C4.66449 9.93402 5.04634 10.658 5.60938 11.2281C4.72592 11.6595 3.9514 12.2849 3.34375 13.0578C2.58051 12.0903 2.10512 10.9274 1.972 9.70225C1.83888 8.47711 2.05341 7.23925 2.59104 6.13037C3.12867 5.02148 3.96767 4.08639 5.01199 3.43212C6.05631 2.77786 7.26375 2.43086 8.4961 2.43086C9.72844 2.43086 10.9359 2.77786 11.9802 3.43212C13.0245 4.08639 13.8635 5.02148 14.4012 6.13037C14.9388 7.23925 15.1533 8.47711 15.0202 9.70225C14.8871 10.9274 14.4117 12.0903 13.6484 13.0578H13.6563Z" fill={pathName.includes('profileInfo')? "#633CFF" : "#737373"}/>
</svg>

        </div>
    )
}