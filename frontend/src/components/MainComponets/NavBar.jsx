import { ShimmerButton } from "../ui/shimmer-button";

export default function NavBar() {
    return (
        <nav className=" top-0 p-6 z-50 flex flex-wrap justify-around md:gap-10">
            <div>
                <a href="https://github.com/rasikarakhewar3010"><ShimmerButton> More Such Projects</ShimmerButton></a>
            </div>
            <div>
                <a href="/contactus"><ShimmerButton> Contact me </ShimmerButton></a>
            </div>

        </nav>
    );
}
