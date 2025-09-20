export default function Card() {
	return (
		<div className="p-5 rounded-xl bg-white flex flex-col gap-5 justify-center items-center text-center w-[310px]">
			<img
				src="/image-qr-code.png"
				alt="QR Code Image"
				width={300}
				height={300}
				className="rounded-xl"
			/>
			<h1 className="font-[700] text-[22px] text-slate-900">
				Improve your front-end skills by building projects
			</h1>
			<p className="font-[400] text-slate-300 text-[16px] text-slate-500">
				Scan the QR code to visit Frontend Mentor and take your coding skills to
				the next level
			</p>
		</div>
	);
}
