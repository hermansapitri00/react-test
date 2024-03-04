import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import SkillBadge from "./SkillBadge";

export default function SkillsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur soluta, sequi expedita quisquam esse debitis ipsum
            optio quo aperiam, iste quam delectus dolores ab vel?
          </p>
        </div>
      </CardContent>
      <CardFooter className="gap-1">
        <SkillBadge />
        <SkillBadge />
        <SkillBadge />
      </CardFooter>
    </Card>
  );
}
