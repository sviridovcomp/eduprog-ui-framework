import Button from "@components/Button";
import Input from "@components/Inputs/Input/Input";
import InputPassword from "@components/Inputs/InputPassword/InputPassword";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import BottomDrawer from "../BottomDrawer";

export default {
  title: "Components/BottomDrawer",
  component: BottomDrawer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
} as ComponentMeta<typeof BottomDrawer>;

const PlaygroundTemplate: ComponentStory<typeof BottomDrawer> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Bottom Drawer</Button>

      <BottomDrawer
        {...props}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit
        tenetur blanditiis dolorem temporibus est quasi laborum facere labore,
        iusto eaque eius alias vero voluptatum aliquid aspernatur voluptatibus
        dignissimos adipisci expedita, recusandae quisquam. Odit distinctio
        voluptatum pariatur quia, tempore tenetur. Qui modi animi atque eligendi
        voluptate autem distinctio repellendus voluptas soluta provident
        similique est reiciendis assumenda error molestias molestiae, recusandae
        amet doloribus, dicta ducimus. Debitis nobis amet nulla, eaque totam
        esse deserunt consequuntur quasi eos facere aut doloremque corrupti, et
        dolorem recusandae accusamus soluta est sint ut, magnam voluptate odit.
        Omnis nihil vero perferendis iste aliquam vel ipsum quas autem numquam
        ab consequuntur molestias ipsam in perspiciatis sapiente maiores iusto
        ipsa culpa, eius non libero exercitationem consectetur minima.
        Necessitatibus in consectetur maiores a iure magni veniam placeat cumque
        pariatur. Enim impedit alias soluta nam exercitationem doloremque quod
        quia esse nihil! Dicta sint tempore unde cupiditate qui inventore libero
        quasi rerum, in rem accusamus magnam quam eligendi, numquam ipsa minima
        eum, soluta natus consectetur! Perspiciatis provident quaerat adipisci
        recusandae in cum sapiente assumenda dolores dignissimos facere repellat
        illo officiis, soluta vero, cupiditate architecto illum ea possimus
        quae. Deleniti dignissimos, atque in exercitationem, labore a eligendi
        nulla ea, esse totam incidunt beatae! Qui, totam id. Molestiae
        accusantium veniam enim quia explicabo repudiandae commodi ipsum,
        facilis sint, corporis tenetur tempore? Repellendus iste qui id amet
        distinctio, voluptatibus sed quod voluptates ab, facilis expedita unde
        quos, earum quo similique? Aspernatur optio sunt commodi error, quaerat
        itaque aut veritatis perferendis blanditiis tenetur at deleniti.
        Quibusdam rem omnis nesciunt qui excepturi quam tempora repellat? Fugit
        repudiandae quas debitis voluptatibus excepturi corrupti odio velit
        illum distinctio, adipisci architecto unde harum at vel et doloremque?
        Iusto possimus aliquid alias quaerat eaque porro, non fugit? Sunt culpa
        deserunt ipsam dolorum veritatis, incidunt nobis ullam voluptatum
        aliquid est ea corporis?
      </BottomDrawer>
    </>
  );
};

export const Playground = PlaygroundTemplate.bind({});

const MobileFormTemplate: ComponentStory<typeof BottomDrawer> = (props) => {
  interface IForm {
    login: string;
    password: string;
  }
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<IForm>({ login: "", password: "" });

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Bottom Drawer</Button>

      <BottomDrawer
        {...props}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          onSubmit={(event) => {
            event.preventDefault();
            alert(JSON.stringify(form));
            setOpen(false);
          }}
        >
          <Input
            label="login"
            defaultValue={form.login}
            onChange={(value: string) => setForm({ ...form, login: value })}
          />

          <InputPassword
            label="password"
            defaultValue={form.password}
            onChange={(value: string) => setForm({ ...form, password: value })}
          />

          <Button type="submit" view="action" size="xl" width="available">
            Sign in
          </Button>
        </form>
      </BottomDrawer>
    </>
  );
};

export const MobileForm = MobileFormTemplate.bind({});
