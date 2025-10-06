import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calculator } from "lucide-react";

const formSchema = z.object({
  origin: z.string().min(1, "Origem é obrigatória"),
  destination: z.string().min(1, "Destino é obrigatório"),
  distance: z.string().min(1, "Distância é obrigatória"),
  cargoWeight: z.string().min(1, "Peso da carga é obrigatório"),
  truckType: z.string().min(1, "Tipo de caminhão é obrigatório"),
  fuelType: z.string().min(1, "Tipo de combustível é obrigatório"),
});

interface TripFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
  isLoading?: boolean;
}

export function TripForm({ onSubmit, isLoading }: TripFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      origin: "",
      destination: "",
      distance: "",
      cargoWeight: "",
      truckType: "",
      fuelType: "diesel",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origem</FormLabel>
                <FormControl>
                  <Input placeholder="São Paulo, SP" {...field} data-testid="input-origin" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino</FormLabel>
                <FormControl>
                  <Input placeholder="Rio de Janeiro, RJ" {...field} data-testid="input-destination" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="distance"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Distância (km)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="430" {...field} data-testid="input-distance" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cargoWeight"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Peso da Carga (kg)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="5000" {...field} data-testid="input-cargo-weight" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="truckType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Caminhão</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-truck-type">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="light">Leve (até 3.5t)</SelectItem>
                    <SelectItem value="medium">Médio (3.5t - 12t)</SelectItem>
                    <SelectItem value="heavy">Pesado (acima de 12t)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fuelType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Tipo de Combustível</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="diesel" data-testid="radio-diesel" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Diesel
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="biodiesel" data-testid="radio-biodiesel" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Biodiesel
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="electric" data-testid="radio-electric" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">
                        Elétrico
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full md:w-auto" data-testid="button-calculate">
          <Calculator className="mr-2 h-4 w-4" />
          {isLoading ? "Calculando..." : "Calcular Emissões"}
        </Button>
      </form>
    </Form>
  );
}
