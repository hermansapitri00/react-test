import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ProjectsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Title</CardTitle>
        <CardDescription>Project Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          accusantium voluptatem, sed neque, dolor distinctio quis,
          exercitationem cupiditate corporis animi non omnis ratione molestias?
          Nam sed atque error architecto iusto.
        </p>
      </CardContent>
      <CardFooter>
        <p>Footer</p>
      </CardFooter>
    </Card>
  );
}
